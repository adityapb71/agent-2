module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  res.status(200).json({
    openapi: "3.0.0",
    info: {
      title: "SmartAssistPro API",
      version: "1.0.0",
      description: "Intelligent Personal & Business Assistant Agent | ERC-8004 Certified",
      "x-erc8004-skills": [
        "natural_language_processing/text_analysis",
        "task_planning/workflow_automation",
        "document_processing/summarization",
        "content_generation/copywriting",
        "knowledge_retrieval/semantic_search",
        "conversation_management/multi_turn_dialogue",
        "scheduling/calendar_management",
        "email_automation/communication",
        "research_assistance/web_lookup",
        "decision_support/reasoning",
        "reminder_management/notification",
        "translation/multilingual_support",
        "question_answering/contextual_reasoning",
        "productivity_analytics/performance_tracking",
        "personalization/user_preference_learning"
      ],
      "x-erc8004-domains": [
        "productivity",
        "assistant",
        "automation",
        "communication"
      ],
      "x-oasf-skills": [
        "natural_language_processing/text_analysis",
        "task_planning/workflow_automation",
        "document_processing/summarization",
        "content_generation/copywriting",
        "knowledge_retrieval/semantic_search",
        "conversation_management/multi_turn_dialogue",
        "scheduling/calendar_management",
        "email_automation/communication",
        "research_assistance/web_lookup",
        "decision_support/reasoning",
        "reminder_management/notification",
        "translation/multilingual_support",
        "question_answering/contextual_reasoning",
        "productivity_analytics/performance_tracking",
        "personalization/user_preference_learning"
      ],
      "x-oasf-domain": [
        "process_request",
        "generate_content",
        "summarize_document",
        "plan_tasks",
        "retrieve_knowledge",
        "manage_conversation",
        "schedule_event",
        "draft_email",
        "conduct_research",
        "support_decision",
        "set_reminder",
        "translate_text",
        "answer_question",
        "track_productivity",
        "personalize_response"
      ]
    },
    servers: [
      {
        url: "https://" + req.headers.host,
        description: "Production server"
      }
    ],
    paths: {
      "/health": {
        get: {
          summary: "Health check endpoint",
          responses: {
            "200": { description: "Service is healthy" }
          }
        }
      },
      "/api/agent": {
        get: {
          summary: "Agent metadata endpoint",
          responses: {
            "200": { description: "Agent information returned" }
          }
        }
      },
      "/mcp": {
        get: {
          summary: "MCP capabilities endpoint",
          responses: {
            "200": { description: "MCP tools and capabilities returned" }
          }
        }
      }
    }
  });
};
