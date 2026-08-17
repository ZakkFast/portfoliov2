import { ProjectType } from "../types/Project";

export const projects: ProjectType[] = [
  {
    id: 1,
    slug: "code-complexity-analyzer",
    title: "Code Complexity Analyzer",
    description:
      "A full-stack code analysis tool that turns source code into structured complexity scores, actionable suggestions, and interactive visualizations.",
    image:
      "https://images.ctfassets.net/0b0og15jgw1m/5BtUj4M28lOSWAbvHF6lvW/01c54b5578f3195b5c10554bde62e2f4/Screenshot_2025-09-10_at_2.04.31%C3%A2__PM.png",
    imageAlt: "Code Complexity Analyzer dashboard showing analysis results and charts",
    projectLabels: ["Python", "TypeScript", "FastAPI", "Next.js"],
    liveUrl: "https://code-complexity-analyzer-indol.vercel.app/",
    githubUrl: "https://github.com/ZakkFast/code-complexity-analyzer",
    caseStudy: {
      problem: [
        "A lot of code-analysis tools either stop at lint output or hand the problem off to a chat box. I wanted something that could take a chunk of code, analyze it, and return useful information in a format that was easy to scan instead of another wall of AI text.",
        "The project also gave me a good excuse to work across the whole stack: request handling and validation on the backend, a structured AI response contract, and a frontend that had to turn that data into something people could actually read quickly.",
      ],
      howItWorks: [
        "The Next.js frontend sends source code to a FastAPI backend through a dedicated analysis endpoint. The backend uses Pydantic models to keep the request and response shape predictable, sends the analysis request to Claude, and returns structured complexity data and suggestions to the UI.",
        "The frontend maps that response into a complexity gauge, code metrics, severity-based suggestions, function-level breakdowns, and a local history view. The important part is that the UI consumes structured data rather than trying to parse prose after the fact.",
      ],
      decisions: [
        "Use a structured AI response contract so the visualization layer has predictable data to work with.",
        "Keep analysis history in localStorage instead of adding accounts and a database before the product needed them.",
        "Separate the Python analysis API from the Next.js frontend so each side can change without turning the project into one giant application layer.",
        "Treat the charts as part of the product, not decoration. The point is to make complexity and problem areas obvious at a glance.",
      ],
      challenges: [
        "LLM output is useful, but only if the application can rely on the shape it gets back. Getting the AI response into a contract the UI could safely render was more important than simply making the API call work.",
        "There was also a state-management edge case in the original portfolio link: sending a cold visitor directly to the results route assumed analysis state already existed. The portfolio now links to the actual entry flow instead.",
      ],
      nextSteps: [
        "Add contract and integration tests around the analysis endpoint and the frontend states that depend on it.",
        "Version the scoring format if the analysis rules become more sophisticated so old results stay understandable.",
        "If persistent history ever becomes a real user need, move it behind optional accounts instead of forcing a database into the current product.",
      ],
    },
  },
  {
    id: 2,
    slug: "weather-normalizer",
    title: "Weather Normalizer",
    description:
      "A TypeScript and Express service that isolates external weather providers behind a stable internal contract.",
    image:
      "https://raw.githubusercontent.com/ZakkFast/Weather-Normalizer/main/architecture.png",
    imageAlt: "Architecture diagram for the Weather Normalizer service",
    imageFit: "contain",
    projectLabels: ["TypeScript", "Node.js", "Express", "Vitest"],
    liveUrl: "",
    githubUrl: "https://github.com/ZakkFast/Weather-Normalizer",
    caseStudy: {
      problem: [
        "Third-party APIs have a habit of leaking into the rest of an application. Once controllers, services, tests, and business logic all know the provider's response shape, changing providers stops being a small integration change and becomes a rewrite.",
        "I built this service around one rule: the rest of the application should never care what shape a weather provider returns.",
      ],
      howItWorks: [
        "Requests enter through an Express controller that handles HTTP validation and optional field projection. The service layer owns the business rules and chooses a provider through a small factory. Providers handle the external request, and normalizers translate provider-specific data into one stable response contract.",
        "The default implementation talks to Open-Meteo, while a mock provider proves the provider can be swapped without changing controllers, routes, or business logic. The service also owns derived data such as isFreezing instead of pretending it came from the upstream API.",
      ],
      decisions: [
        "Keep provider-specific response shapes inside provider and normalizer code instead of letting them spread through the application.",
        "Use a small factory for provider selection rather than building a plugin system the project did not need.",
        "Put derived business fields in the service layer so external data concerns and application rules stay separate.",
        "Use a deterministic mock provider for tests so the test suite never depends on an external weather service being available.",
      ],
      challenges: [
        "The main tradeoff was knowing where to stop abstracting. It would have been easy to build a generic adapter framework, but that would make a small service harder to understand without buying much flexibility.",
        "The project was intentionally timeboxed, so the goal was a complete demonstration of swapability and error handling rather than a production weather platform with every possible provider and resilience pattern.",
      ],
      testing: [
        "Vitest and Supertest cover request validation, provider switching, field filtering, error handling, and the normalized response contract.",
        "Tests use the mock provider instead of the network, which keeps them fast and makes failures about the application rather than an upstream API.",
      ],
      nextSteps: [
        "Add a second real provider to prove the abstraction against another production API instead of only the mock implementation.",
        "For a production service, add provider-level observability and resilience such as retry policy, circuit breaking, and request metrics where the traffic actually justifies them.",
      ],
    },
  },
  {
    id: 3,
    slug: "entropy-ai",
    title: "Entropy AI",
    description:
      "A satirical AI assistant with multiple personalities, persistent chat state, and Anthropic-powered responses wrapped in a deliberately unhelpful product.",
    image:
      "https://images.ctfassets.net/0b0og15jgw1m/5yTIjX1gDq2dxWSz895QI7/e857c5284ae432b2b231aaad01539025/Screenshot_2025-09-15_at_9.40.00%C3%A2__PM.png",
    imageAlt: "Entropy AI chat interface",
    projectLabels: ["Next.js", "React", "Zustand", "Anthropic API"],
    liveUrl: "https://entropy-ai-plum.vercel.app/",
    githubUrl: "https://github.com/ZakkFast/Entropy-AI",
    caseStudy: {
      problem: [
        "Entropy started as a joke: what if a polished AI assistant was competent enough to answer you, but visibly annoyed that you asked? The project only works if the joke sits on top of an application that still feels like a real chat product.",
        "That meant the personality could not just be a different coat of paint. The model selector, response timing, system prompts, persistent conversation state, loading behavior, and interface all had to reinforce the same idea.",
      ],
      howItWorks: [
        "The application is built with Next.js and React. Chat state is managed with Zustand and persisted locally so the user can keep a conversation without creating an account. A Next.js API route handles requests to Anthropic and selects a system prompt based on the Entropy personality the user picked.",
        "The three modes deliberately behave differently. Standard is useful with attitude, Haiku constrains responses to the bit, and Turbo adds an intentionally ridiculous delay before returning a response. They all use the same underlying API path, which keeps the product behavior separate from the model provider integration.",
      ],
      decisions: [
        "Use one AI integration with personality-specific system prompts instead of pretending each UI option is a completely different model stack.",
        "Keep conversation history local because accounts would add friction without improving the joke or the core experience.",
        "Make response timing part of the product behavior. Turbo being slower is intentionally wrong, which only works if the loading state makes the delay feel deliberate instead of broken.",
      ],
      challenges: [
        "Comedy is surprisingly easy to overdo in an AI product. The responses still need to be useful often enough that the app feels intentional rather than like a prompt that only insults the user.",
        "The personality rules also have to survive real user input. Keeping the different modes distinct without duplicating the entire API implementation was the main structural concern.",
      ],
      nextSteps: [
        "Add automated coverage around the API route and model-selection behavior so personality changes do not accidentally break the basic chat flow.",
        "If I revisited the project, I would tighten the boundaries around model configuration and make the prompt behavior easier to test without calling the provider.",
      ],
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
