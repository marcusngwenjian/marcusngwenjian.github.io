# Documentation

Table of contents:
- [Init](init.md)
- [Run](run.md)
- [Build](build.md)

## Project structure:
```bash
├── app/
│   └── portfolio/
│       └── page.tsx           # Calls api in services/
├── services/
│   ├── work.ts                # The Dispatcher (Selects DB, Mock, or API)
│   └── implementations/       # Logic split by source
│       ├── work.ts            # Retrieve data from local/db/external-apis
│       └── achievement.ts
├── types/
│   ├── schema/
│   │   └── workSchema.ts      # Zod schema + inferred types
│   ├── work.ts                # Zod schema + inferred types
│   └── achievement.ts
├── data/
│   └── work.json              # Static mock data
└── ...                        # More...
```
