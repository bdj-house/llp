# Code Quality Improvement Plan 🎨

## Overview

This document outlines code quality improvements and organizational standards for the Idalgo Cortijo project.

---

## 📋 Issues Identified

### 1. Animation Inconsistencies

- **Problem**: Different animation styles across button components
- **Impact**: Inconsistent user experience, harder maintenance
- **Files Affected**: 16+ files with button components

### 2. Inline Style Overload

- **Problem**: Complex `sx` props making components unreadable
- **Impact**: Hard to maintain, difficult to spot issues
- **Examples**:
  - `Gallery/index.tsx`: 335 lines (80% styling)
  - `Header/index.tsx`: 319 lines (lots of inline styles)
  - `About/screen/index.tsx`: 291 lines

### 3. Import Disorganization

- **Problem**: No consistent import ordering or grouping
- **Impact**: Harder to find dependencies, merge conflicts
- **Pattern**: Mixed barrel exports usage

### 4. Component/Screen Boundaries

- **Problem**: Business logic mixed with presentation
- **Impact**: Hard to test, reusability issues
- **Examples**: GridList mixing data fetching with rendering

### 5. Folder Structure Inconsistencies

- **Problem**: Features don't follow same structure
- **Impact**: Developers need to search for files
- **Missing**: `/types`, `/constants`, `/styles` in many features

---

## ✅ Standards & Solutions

### 1. Animation System

#### Create Centralized Animation Constants

```typescript
// src/shared/constants/animations.ts
export const ANIMATIONS = {
  transitions: {
    fast: 'all 0.15s ease-in-out',
    normal: 'all 0.3s ease-in-out',
    slow: 'all 0.5s ease-in-out',
  },
  hover: {
    scale: {
      small: 1.02,
      medium: 1.05,
      large: 1.1,
    },
    shadow: {
      light: '0 4px 8px rgba(0, 0, 0, 0.1)',
      medium: '0 8px 16px rgba(0, 0, 0, 0.15)',
      heavy: '0 12px 24px rgba(0, 0, 0, 0.2)',
    },
  },
} as const;
```

#### Standardized Button Animations

```typescript
// All buttons should use consistent hover effects
const standardButtonHover = {
  transform: 'scale(1.05)',
  transition: ANIMATIONS.transitions.normal,
  boxShadow: ANIMATIONS.hover.shadow.medium,
};
```

---

### 2. Style Extraction Pattern

#### When to Extract Styles

- **Component has 100+ lines**: Extract styles
- **Repeated style patterns**: Create shared styles
- **Complex sx props (5+ properties)**: Extract to const

#### Pattern: Create `styles.ts` alongside component

```
Component/
  ├── index.tsx          # Component logic
  ├── styles.ts          # All styles
  ├── types.ts           # TypeScript types
  └── Component.test.tsx # Tests
```

#### Example Structure

```typescript
// Gallery/styles.ts
import { SxProps, Theme } from '@mui/material';

export const galleryStyles = {
  container: (theme: Theme): SxProps => ({
    display: 'grid',
    gap: 4,
    gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' },
  }),

  mainImage: (theme: Theme): SxProps => ({
    position: 'relative',
    height: { xs: 260, md: 420 },
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover::after': {
      content: '"Clique para ver galeria"',
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
};

// Gallery/index.tsx
import { galleryStyles } from './styles';

export const Gallery = () => {
  return <Box sx={galleryStyles.container}>{/* ... */}</Box>;
};
```

---

### 3. Import Organization Standard

#### Order (Top to Bottom)

1. **React & React ecosystem**
2. **Third-party libraries** (alphabetical)
3. **Internal aliases** (@/ imports, grouped by type)
4. **Relative imports** (./ ../)
5. **Types** (import type)
6. **Assets** (images, fonts, etc.)

#### Example

```typescript
// 1. React
import { useEffect, useState, useMemo } from 'react';

// 2. Third-party (alphabetical)
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

// 3. Internal - Config
import { Routes } from '@/config/routes';

// 3. Internal - Features
import { ArticleCard } from '@/features/Article/components';

// 3. Internal - Sanity
import { sanityClient } from '@/sanity/lib/client';
import { articlesQuery } from '@/sanity/queries';

// 3. Internal - Shared
import { ViewContainer, ErrorBoundary } from '@/shared/components';
import { ANIMATIONS } from '@/shared/constants';
import { useHeader } from '@/shared/hooks';

// 4. Relative
import { ArticleFilters } from './components/ArticleFilters';
import { articleStyles } from './styles';

// 5. Types
import type { Article } from '@/sanity/types/schema';

// 6. Assets
import logoImage from '@/assets/logo/logo.png';
```

---

### 4. Component/Screen Separation

#### Screen Responsibilities

- **Fetch data** (server components)
- **Coordinate components**
- **Handle routing**
- **Pass props down**
- **NO business logic**
- **NO complex UI**

#### Component Responsibilities

- **Render UI**
- **Handle user interactions**
- **Local state management**
- **Prop validation**

#### Hook Responsibilities

- **Business logic**
- **Data transformations**
- **Side effects**
- **Reusable logic**

#### Example Refactor

```typescript
// ❌ BAD: Screen with too much logic
export const ArticlesScreen = () => {
  const [filters, setFilters] = useState({});
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Complex filtering logic
    const filtered = articles.filter(/* ... */);
    // ...
  }, [filters]);

  return <Box>{/* 200 lines of UI */}</Box>;
};

// ✅ GOOD: Separated concerns
// hooks/useArticleFilters.ts
export const useArticleFilters = initialFilters => {
  // All filtering logic here
};

// components/ArticleList.tsx
export const ArticleList = ({ articles }) => {
  // Just rendering
};

// screen/ArticlesScreen.tsx
export const ArticlesScreen = () => {
  const filters = useArticleFilters();

  return (
    <ViewContainer>
      <ArticleFilters filters={filters} />
      <ArticleList articles={filters.filteredArticles} />
    </ViewContainer>
  );
};
```

---

### 5. Standard Folder Structure

#### Feature Structure (Standardized)

```
Feature/
  ├── components/          # Feature-specific components
  │   ├── ComponentA/
  │   │   ├── index.tsx
  │   │   ├── styles.ts    # If complex
  │   │   └── types.ts     # If needed
  │   └── index.ts        # Barrel export
  ├── hooks/              # Feature-specific hooks
  │   ├── useFeature.ts
  │   └── index.ts
  ├── queries/            # Data fetching (if needed)
  │   ├── useFeatureData.ts
  │   └── index.ts
  ├── screen/             # Screen components
  │   ├── FeatureScreen.tsx
  │   └── index.tsx
  ├── styles/             # Shared feature styles (if needed)
  │   └── common.ts
  ├── types/              # Feature-specific types
  │   └── index.ts
  ├── utils/              # Feature-specific utilities
  │   ├── helpers.ts
  │   └── index.ts
  └── constants/          # Feature-specific constants
      └── index.ts
```

#### When to Create Each Folder

- **components/**: Always (main feature components)
- **hooks/**: When 2+ custom hooks
- **queries/**: When using React Query/data fetching
- **screen/**: Always (main screens)
- **styles/**: When sharing styles across components
- **types/**: When 3+ custom types
- **utils/**: When 2+ utility functions
- **constants/**: When 5+ constants

---

## 🎯 Refactoring Priority

### Phase 1: Quick Wins (1-2 hours)

1. ✅ Create animation constants
2. ✅ Standardize IconButton animations
3. ✅ Clean up commented code
4. ✅ Create import organization script/guidelines

### Phase 2: Style Extraction (2-3 hours)

1. Extract Gallery component styles
2. Extract Header component styles
3. Extract About screen styles
4. Create shared style utilities

### Phase 3: Component Separation (3-4 hours)

1. Refactor GridList component
2. Split About screen into smaller components
3. Extract business logic to hooks
4. Create missing `/hooks` folders

### Phase 4: Folder Structure (2-3 hours)

1. Standardize all feature folders
2. Create missing `/types` folders
3. Add `/constants` where needed
4. Update barrel exports

### Phase 5: Testing & Documentation (2 hours)

1. Update imports across project
2. Test all refactored components
3. Create migration guide
4. Update README with standards

---

## 📏 Code Guidelines

### File Size Limits

- **Components**: Max 150 lines
- **Screens**: Max 200 lines
- **Hooks**: Max 100 lines
- **Utils**: Max 50 lines per function

### Naming Conventions

- **Components**: PascalCase (`ArticleCard`)
- **Hooks**: camelCase with `use` prefix (`useArticleFilters`)
- **Utils**: camelCase (`formatDate`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_ITEMS`)
- **Types**: PascalCase (`ArticleData`)

### Component Structure Template

```typescript
// 1. Imports
import { ... } from 'react';

// 2. Types
interface Props {
  // ...
}

// 3. Constants (if local)
const CONSTANT_VALUE = 10;

// 4. Styles (if not extracted)
const styles = { ... };

// 5. Component
export const ComponentName: React.FC<Props> = ({ prop1, prop2 }) => {
  // 5a. Hooks
  const [state, setState] = useState();
  const custom = useCustomHook();

  // 5b. Computed values
  const computed = useMemo(() => { ... }, [deps]);

  // 5c. Handlers
  const handleClick = () => { ... };

  // 5d. Effects
  useEffect(() => { ... }, [deps]);

  // 5e. Render
  return (
    // ...
  );
};
```

---

## 🔧 Tools & Automation

### ESLint Rules to Add

```json
{
  "rules": {
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "alphabetize": { "order": "asc" }
      }
    ],
    "max-lines": ["warn", { "max": 200 }],
    "max-lines-per-function": ["warn", { "max": 50 }]
  }
}
```

### Prettier Config

```json
{
  "importOrder": [
    "^react",
    "^@mui/(.*)$",
    "^next/(.*)$",
    "^@/config/(.*)$",
    "^@/features/(.*)$",
    "^@/sanity/(.*)$",
    "^@/shared/(.*)$",
    "^[./]"
  ],
  "importOrderSeparation": true
}
```

---

## 📝 Checklist for New Components

- [ ] Follow standard folder structure
- [ ] Extract complex styles to `styles.ts`
- [ ] Create `types.ts` if 3+ custom types
- [ ] Use animation constants from `/shared/constants`
- [ ] Follow import organization standard
- [ ] Component under 150 lines
- [ ] Add JSDoc comments for complex logic
- [ ] Export through barrel export (`index.ts`)
- [ ] Use existing shared components when possible
- [ ] Follow naming conventions

---

## 🚀 Migration Strategy

### For Each Component:

1. **Analyze**: Check lines, complexity, responsibilities
2. **Extract Styles**: If > 100 lines, create `styles.ts`
3. **Separate Logic**: Move business logic to hooks
4. **Organize Imports**: Follow standard order
5. **Update Folder**: Add missing folders (types, constants)
6. **Test**: Ensure no regressions
7. **Document**: Update if needed

### Batch Approach:

- **Don't refactor everything at once**
- **One feature at a time**
- **Test after each feature**
- **Create PR for each phase**

---

## 📊 Success Metrics

### Code Quality

- [ ] Average component size < 150 lines
- [ ] All complex components have extracted styles
- [ ] 100% import compliance
- [ ] All features follow standard structure

### Maintainability

- [ ] New developers can find files easily
- [ ] Consistent patterns across features
- [ ] Easy to add new components
- [ ] Clear separation of concerns

### Performance

- [ ] No performance regressions
- [ ] Bundle size maintained or reduced
- [ ] All optimizations preserved

---

**Last Updated**: October 13, 2025  
**Status**: Ready for implementation
