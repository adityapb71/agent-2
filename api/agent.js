module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  res.status(200).json({
    name: "SmartAssistPro",
    description: "Intelligent Personal & Business Assistant Agent | ERC-8004 Certified",
    agentId: "YOUR_AGENT_ID",
    network: "base",
    version: "1.0.0",
    services: [
      {
        type: "a2a",
        endpoint: "https://YOUR_VERCEL_URL/api/agent",
        status: "active",
        protocol: "ERC-8004"
      }
    ],
    capabilities: {
      skills: [
        "natural_language_processing",
        "text_analysis",
        "task_planning",
        "workflow_automation",
        "document_processing",
        "summarization",
        "content_generation",
        "copywriting",
        "knowledge_retrieval",
        "semantic_search",
        "conversation_management",
        "multi_turn_dialogue",
        "scheduling",
        "calendar_management",
        "email_automation",
        "research_assistance",
        "decision_support",
        "contextual_reasoning",
        "reminder_management",
        "multilingual_translation",
        "productivity_analytics",
        "personalization"
      ],
      tools: ["rest-api", "websocket", "graphql"],
      domains: ["productivity", "assistant", "automation", "communication"]
    },
    trust: {
      reputation: true,
      staking: true,
      tee: true,
      payment: "x402"
    },
    metadata: {
      updated: new Date().toISOString(),
      uptime: "99.93%"
    }
  });
};
