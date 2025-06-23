# API Integration Guide - LVNG.ai Platform
## Enterprise-Grade AI Service Integration Specifications

### Overview
This document provides comprehensive technical specifications for integrating with LVNG.ai's AI platform, including authentication, endpoints, rate limiting, and best practices. Updated for June 2025 with the latest API standards and security protocols.

---

## 🔐 Authentication & Authorization

### API Key Authentication
```http
Authorization: Bearer lvng_api_key_your_key_here
Content-Type: application/json
```

### OAuth 2.0 Flow (Enterprise)
```python
import requests
from authlib.integrations.requests_client import OAuth2Session

# Enterprise OAuth flow
client = OAuth2Session(
    client_id='your_client_id',
    client_secret='your_client_secret',
    scope='agents:read agents:write models:access'
)

token = client.fetch_token(
    'https://api.lvng.ai/oauth/token',
    authorization_response=authorization_response
)
```

### JWT Token Structure
```json
{
  "iss": "lvng.ai",
  "sub": "user_id_12345",
  "aud": "api.lvng.ai",
  "exp": 1719936000,
  "iat": 1719932400,
  "scope": "agents:write models:access",
  "org_id": "org_67890",
  "rate_limit": "enterprise"
}
```

---

## 🛠️ Core API Endpoints

### Agent Management

#### Create Agent
```http
POST /v1/agents
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "name": "Customer Support Agent",
  "description": "Handles customer inquiries and support tickets",
  "model": "gpt-4.1-mini",
  "temperature": 0.3,
  "max_tokens": 2000,
  "tools": ["web_search", "knowledge_base", "ticket_system"],
  "memory_config": {
    "type": "conversation",
    "max_turns": 20,
    "summarization": true
  },
  "system_prompt": "You are a helpful customer support agent...",
  "functions": [
    {
      "name": "search_knowledge_base",
      "description": "Search the company knowledge base",
      "parameters": {
        "type": "object",
        "properties": {
          "query": {"type": "string"}
        }
      }
    }
  ]
}
```

**Response:**
```json
{
  "id": "agent_abc123",
  "name": "Customer Support Agent",
  "status": "active",
  "created_at": "2025-06-23T10:30:00Z",
  "updated_at": "2025-06-23T10:30:00Z",
  "endpoint": "https://api.lvng.ai/v1/agents/agent_abc123/chat",
  "webhook_url": null,
  "cost_tracking": {
    "input_tokens": 0,
    "output_tokens": 0,
    "total_cost": 0.00
  }
}
```

#### List Agents
```http
GET /v1/agents?limit=20&offset=0&status=active
Authorization: Bearer {api_key}
```

#### Update Agent
```http
PATCH /v1/agents/{agent_id}
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "model": "gpt-4.1",
  "temperature": 0.1,
  "system_prompt": "Updated system prompt..."
}
```

#### Delete Agent
```http
DELETE /v1/agents/{agent_id}
Authorization: Bearer {api_key}
```

### Chat & Conversations

#### Send Message to Agent
```http
POST /v1/agents/{agent_id}/chat
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "message": "What are your return policies?",
  "session_id": "session_xyz789",
  "context": {
    "user_id": "user_123",
    "channel": "web_chat",
    "metadata": {
      "page_url": "https://example.com/support",
      "user_tier": "premium"
    }
  },
  "stream": false,
  "max_tokens": 1000
}
```

**Response:**
```json
{
  "id": "msg_def456",
  "agent_id": "agent_abc123",
  "session_id": "session_xyz789",
  "message": "What are your return policies?",
  "response": "Our return policy allows returns within 30 days...",
  "tokens_used": {
    "input": 25,
    "output": 87,
    "cached": 15
  },
  "cost": 0.0023,
  "response_time_ms": 445,
  "functions_called": [
    {
      "name": "search_knowledge_base",
      "arguments": {"query": "return policy"},
      "result": "Found policy document..."
    }
  ],
  "created_at": "2025-06-23T10:35:22Z"
}
```

#### Streaming Response
```http
POST /v1/agents/{agent_id}/chat
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "message": "Explain machine learning",
  "session_id": "session_xyz789",
  "stream": true
}
```

**Streaming Response Format:**
```
data: {"type": "start", "message_id": "msg_ghi789"}

data: {"type": "content", "delta": "Machine learning is a"}

data: {"type": "content", "delta": " subset of artificial intelligence"}

data: {"type": "function_call", "name": "search_web", "arguments": {"query": "ML definition"}}

data: {"type": "function_result", "result": "Machine learning definition found..."}

data: {"type": "content", "delta": " that enables systems to learn"}

data: {"type": "end", "total_tokens": {"input": 15, "output": 234}, "cost": 0.0045}
```

### Multi-Agent Workflows

#### Create Agent Team
```http
POST /v1/teams
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "name": "Research Team",
  "description": "Collaborative research and analysis team",
  "agents": [
    {
      "agent_id": "agent_researcher_123",
      "role": "researcher",
      "order": 1
    },
    {
      "agent_id": "agent_analyst_456",
      "role": "analyst", 
      "order": 2
    },
    {
      "agent_id": "agent_writer_789",
      "role": "writer",
      "order": 3
    }
  ],
  "execution_mode": "sequential",
  "handoff_prompts": {
    "researcher_to_analyst": "Please analyze this research data: {research_output}",
    "analyst_to_writer": "Please write a report based on this analysis: {analysis_output}"
  }
}
```

#### Execute Team Workflow
```http
POST /v1/teams/{team_id}/execute
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "task": "Research and analyze the impact of AI on healthcare in 2025",
  "context": {
    "industry": "healthcare",
    "timeframe": "2025",
    "depth": "comprehensive"
  },
  "callback_url": "https://your-app.com/webhooks/team-completion"
}
```

---

## 📊 Model Management

### Available Models
```http
GET /v1/models
Authorization: Bearer {api_key}
```

**Response:**
```json
{
  "models": [
    {
      "id": "gpt-4.1",
      "name": "GPT-4.1",
      "provider": "openai",
      "capabilities": ["text", "reasoning", "function_calling"],
      "context_window": 1000000,
      "max_output": 32768,
      "cost_per_1k_input": 0.002,
      "cost_per_1k_output": 0.008,
      "latency_ms": 600,
      "availability": "high"
    },
    {
      "id": "gpt-4.1-mini",
      "name": "GPT-4.1 Mini",
      "provider": "openai",
      "capabilities": ["text", "reasoning", "function_calling"],
      "context_window": 1000000,
      "max_output": 16384,
      "cost_per_1k_input": 0.0004,
      "cost_per_1k_output": 0.0016,
      "latency_ms": 400,
      "availability": "high"
    }
  ],
  "pagination": {
    "total": 25,
    "page": 1,
    "per_page": 20
  }
}
```

### Model Performance Metrics
```http
GET /v1/models/{model_id}/metrics?timeframe=24h
Authorization: Bearer {api_key}
```

---

## 🔧 Tool & Function Integration

### Register Custom Function
```http
POST /v1/functions
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "name": "get_weather",
  "description": "Get current weather for a location",
  "parameters": {
    "type": "object",
    "properties": {
      "location": {
        "type": "string",
        "description": "City name or coordinates"
      },
      "units": {
        "type": "string",
        "enum": ["celsius", "fahrenheit"],
        "default": "celsius"
      }
    },
    "required": ["location"]
  },
  "endpoint": "https://your-api.com/weather",
  "authentication": {
    "type": "api_key",
    "header": "X-API-Key",
    "value": "{weather_api_key}"
  },
  "rate_limit": {
    "requests_per_minute": 100
  }
}
```

### Function Execution Log
```http
GET /v1/functions/{function_id}/executions?limit=50
Authorization: Bearer {api_key}
```

---

## 📈 Analytics & Monitoring

### Usage Analytics
```http
GET /v1/analytics/usage?start_date=2025-06-01&end_date=2025-06-23&granularity=day
Authorization: Bearer {api_key}
```

**Response:**
```json
{
  "period": {
    "start": "2025-06-01T00:00:00Z",
    "end": "2025-06-23T23:59:59Z"
  },
  "metrics": [
    {
      "date": "2025-06-01",
      "requests": 1250,
      "tokens_input": 45600,
      "tokens_output": 123400,
      "cost": 24.56,
      "avg_latency_ms": 425,
      "success_rate": 99.2
    }
  ],
  "totals": {
    "requests": 28750,
    "tokens_input": 1048300,
    "tokens_output": 2841200,
    "cost": 565.43,
    "avg_latency_ms": 398,
    "success_rate": 99.1
  }
}
```

### Real-time Metrics
```http
GET /v1/metrics/realtime
Authorization: Bearer {api_key}
```

### Cost Tracking
```http
GET /v1/billing/current-usage
Authorization: Bearer {api_key}
```

---

## ⚡ Rate Limiting & Quotas

### Rate Limit Headers
```http
HTTP/1.1 200 OK
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1719936000
X-RateLimit-Window: 3600
X-Daily-Quota-Limit: 100000
X-Daily-Quota-Remaining: 99500
X-Daily-Quota-Reset: 1719964800
```

### Rate Limit Tiers
| Tier | Requests/Hour | Tokens/Day | Agent Limit | Team Limit |
|------|---------------|------------|-------------|------------|
| Free | 100 | 10,000 | 1 | 0 |
| Starter | 1,000 | 100,000 | 5 | 1 |
| Professional | 10,000 | 1,000,000 | 25 | 5 |
| Enterprise | 100,000 | 10,000,000 | Unlimited | Unlimited |

### Handle Rate Limiting
```python
import time
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

def make_api_request_with_retry(url, headers, data, max_retries=3):
    retry_strategy = Retry(
        total=max_retries,
        status_forcelist=[429, 500, 502, 503, 504],
        backoff_factor=1
    )
    
    adapter = HTTPAdapter(max_retries=retry_strategy)
    session = requests.Session()
    session.mount("https://", adapter)
    
    try:
        response = session.post(url, headers=headers, json=data)
        
        if response.status_code == 429:
            retry_after = int(response.headers.get('Retry-After', 60))
            time.sleep(retry_after)
            return make_api_request_with_retry(url, headers, data, max_retries-1)
            
        return response
        
    except requests.exceptions.RequestException as e:
        print(f"Request failed: {e}")
        return None
```

---

## 🔔 Webhooks & Event Streaming

### Configure Webhooks
```http
POST /v1/webhooks
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "url": "https://your-app.com/webhooks/lvng",
  "events": [
    "agent.message.completed",
    "team.workflow.finished", 
    "agent.error.occurred",
    "billing.quota.warning"
  ],
  "secret": "your_webhook_secret_key",
  "retry_config": {
    "max_attempts": 3,
    "backoff_multiplier": 2
  }
}
```

### Webhook Event Format
```json
{
  "id": "evt_abc123def456",
  "type": "agent.message.completed",
  "created_at": "2025-06-23T10:35:22Z",
  "data": {
    "agent_id": "agent_abc123",
    "message_id": "msg_def456",
    "session_id": "session_xyz789",
    "response": "Our return policy allows returns within 30 days...",
    "tokens_used": {"input": 25, "output": 87},
    "cost": 0.0023,
    "response_time_ms": 445
  },
  "signature": "sha256=calculated_signature"
}
```

### Verify Webhook Signature
```python
import hmac
import hashlib

def verify_webhook_signature(payload, signature, secret):
    expected_signature = hmac.new(
        secret.encode('utf-8'),
        payload.encode('utf-8'),
        hashlib.sha256
    ).hexdigest()
    
    return hmac.compare_digest(f"sha256={expected_signature}", signature)
```

---

## 🚀 SDKs & Code Examples

### Python SDK
```python
from lvng_ai import LVNGClient

# Initialize client
client = LVNGClient(api_key="your_api_key")

# Create agent
agent = client.agents.create(
    name="Support Bot",
    model="gpt-4.1-mini",
    temperature=0.3,
    tools=["web_search", "knowledge_base"]
)

# Send message
response = client.agents.chat(
    agent_id=agent.id,
    message="How can I return an item?",
    session_id="user_session_123"
)

print(f"Response: {response.message}")
print(f"Cost: ${response.cost:.4f}")
```

### JavaScript/Node.js SDK
```javascript
import { LVNGClient } from '@lvng/ai-sdk';

const client = new LVNGClient({ apiKey: 'your_api_key' });

// Create agent
const agent = await client.agents.create({
  name: 'Support Bot',
  model: 'gpt-4.1-mini',
  temperature: 0.3,
  tools: ['web_search', 'knowledge_base']
});

// Send message with streaming
const stream = await client.agents.chatStream({
  agentId: agent.id,
  message: 'How can I return an item?',
  sessionId: 'user_session_123'
});

for await (const chunk of stream) {
  if (chunk.type === 'content') {
    process.stdout.write(chunk.delta);
  }
}
```

### cURL Examples
```bash
# Create agent
curl -X POST https://api.lvng.ai/v1/agents \
  -H "Authorization: Bearer your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Support Bot",
    "model": "gpt-4.1-mini",
    "temperature": 0.3,
    "tools": ["web_search", "knowledge_base"]
  }'

# Send message
curl -X POST https://api.lvng.ai/v1/agents/agent_abc123/chat \
  -H "Authorization: Bearer your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "How can I return an item?",
    "session_id": "user_session_123"
  }'
```

---

## 🔒 Security Best Practices

### API Key Management
```python
import os
from cryptography.fernet import Fernet

# Store API keys securely
class SecureAPIKeyManager:
    def __init__(self):
        self.cipher_suite = Fernet(os.environ['ENCRYPTION_KEY'])
    
    def store_api_key(self, key):
        encrypted_key = self.cipher_suite.encrypt(key.encode())
        # Store encrypted_key in secure storage
        return encrypted_key
    
    def retrieve_api_key(self):
        # Retrieve from secure storage
        encrypted_key = self.get_from_secure_storage()
        return self.cipher_suite.decrypt(encrypted_key).decode()
```

### Request Signing
```python
import hmac
import hashlib
import time

def sign_request(method, path, body, secret_key):
    timestamp = str(int(time.time()))
    message = f"{method}|{path}|{body}|{timestamp}"
    
    signature = hmac.new(
        secret_key.encode('utf-8'),
        message.encode('utf-8'),
        hashlib.sha256
    ).hexdigest()
    
    return {
        'X-LVNG-Timestamp': timestamp,
        'X-LVNG-Signature': signature
    }
```

### Environment-Specific Endpoints
```python
class LVNGEnvironments:
    PRODUCTION = "https://api.lvng.ai"
    STAGING = "https://staging-api.lvng.ai" 
    DEVELOPMENT = "https://dev-api.lvng.ai"
    
    @classmethod
    def get_endpoint(cls, environment="production"):
        return getattr(cls, environment.upper(), cls.PRODUCTION)
```

---

## 🐛 Error Handling

### Error Response Format
```json
{
  "error": {
    "type": "invalid_request_error",
    "code": "missing_parameter",
    "message": "Missing required parameter: 'message'",
    "param": "message",
    "request_id": "req_abc123def456"
  }
}
```

### Common Error Codes
| Code | HTTP Status | Description |
|------|-------------|-------------|
| `api_key_invalid` | 401 | Invalid API key provided |
| `rate_limit_exceeded` | 429 | Rate limit exceeded |
| `quota_exceeded` | 429 | Daily quota exceeded |
| `agent_not_found` | 404 | Agent ID not found |
| `invalid_model` | 400 | Unsupported model specified |
| `context_length_exceeded` | 400 | Input too long for model |
| `function_error` | 500 | Custom function execution failed |

### Python Error Handling
```python
from lvng_ai.exceptions import LVNGAPIError, RateLimitError, QuotaExceededError

try:
    response = client.agents.chat(
        agent_id="agent_abc123",
        message="Hello world"
    )
except RateLimitError as e:
    print(f"Rate limited. Retry after: {e.retry_after} seconds")
    time.sleep(e.retry_after)
    # Retry request
except QuotaExceededError as e:
    print(f"Quota exceeded. Resets at: {e.reset_time}")
    # Handle quota exceeded
except LVNGAPIError as e:
    print(f"API Error: {e.message} (Code: {e.code})")
    # Handle other API errors
```

---

## 📝 Testing & Development

### Test API Keys
```bash
# Development environment
export LVNG_API_KEY="lvng_test_key_dev_123..."

# Test endpoint connectivity
curl -X GET https://dev-api.lvng.ai/v1/health \
  -H "Authorization: Bearer $LVNG_API_KEY"
```

### Mock Server Setup
```python
import json
from unittest.mock import Mock, patch

class MockLVNGClient:
    def __init__(self, api_key):
        self.agents = MockAgentsAPI()
    
    class MockAgentsAPI:
        def chat(self, agent_id, message, session_id=None):
            return {
                "id": "msg_mock_123",
                "response": "This is a mock response",
                "tokens_used": {"input": 10, "output": 15},
                "cost": 0.001
            }

# Use in tests
@patch('your_app.lvng_client', MockLVNGClient('test_key'))
def test_agent_chat():
    # Your test code here
    pass
```

---

## 🔄 Migration & Versioning

### API Versioning
- **Current Version**: v1
- **Supported Versions**: v1
- **Deprecation Policy**: 6 months notice
- **Breaking Changes**: Major version increment only

### Migration Helper
```python
def migrate_to_v2():
    """
    Migration utility for future v2 API
    """
    # Agent creation changes
    old_agent = {
        "name": "Agent",
        "model": "gpt-4.1-mini",
        "prompt": "You are helpful"
    }
    
    new_agent = {
        "name": "Agent", 
        "model": "gpt-4.1-mini",
        "system_prompt": "You are helpful",  # renamed
        "version": "v2"  # required in v2
    }
    
    return new_agent
```

---

*Last Updated: June 23, 2025*
*API Version: v1.2.0*
*Contact: api-support@lvng.ai for technical assistance* 