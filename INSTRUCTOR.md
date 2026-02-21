# INSTRUCTOR.md - GoodMorningGirl React Template

## 🎯 Project Overview

**Purpose:** A modern, responsive React landing page template with multiple feature sections perfect for SaaS, digital products, or service-based businesses.

**Tech Stack:**

- **Frontend:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS + Custom CSS
- **State Management:** Zustand
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Animations:** Framer Motion (ready to implement)
- **Backend:** Firebase (optional - template provided)

---

## 📁 Project Structure

```
src/
├── pages/                 # Page components (routed screens)
│   ├── LandingPage.tsx   # Hero/main landing page
│   ├── About.tsx         # About page
│   ├── Services.tsx      # Services/features page
│   ├── Features.tsx      # Detailed features showcase
│   └── Portfolio.tsx     # Portfolio/case studies
├── components/           # Reusable UI components
│   ├── Layout/           # Layout wrapper, header, footer
│   ├── Card.tsx          # Reusable card component
│   ├── FeatureComponent.tsx
│   └── ...other components
├── config/               # Configuration files
│   └── firebase.ts       # Firebase initialization
├── stores/               # Zustand state management
│   └── useAppStore.ts    # App-wide state
├── services/             # API/external service calls
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
├── utils/                # Utility functions
├── App.tsx               # Main app component with routing
├── main.tsx              # Entry point
└── index.css             # Global styles
```

---

## 🚀 Getting Started

### 1. **Project Setup**

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 2. **Firebase Setup (Optional)**

If you want to integrate Firebase:

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project
3. Enable required services (Auth, Firestore, Storage, etc.)
4. Get your Firebase config credentials
5. Update `src/config/firebase.ts` with your credentials:

```typescript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
};
```

6. Use Firebase services in your components via the initialized `db` export

---

## 📝 Common Development Tasks

### Add a New Page

1. Create component in `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`:

    ```tsx
    import NewPage from "./pages/NewPage";

    <Route path="/new-page" element={<NewPage />} />;
    ```

3. Update navigation in header if needed

### Add a New Component

1. Create component in `src/components/ComponentName.tsx`
2. Import and use in pages or other components
3. Keep components focused and reusable

### Manage Global State

Use `useAppStore` in `src/stores/useAppStore.ts`:

```tsx
// In your component
import { useAppStore } from "../stores/useAppStore";

const { count, increment } = useAppStore();
```

### Add Firebase Authentication

```tsx
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const login = async (email: string, password: string) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in:", result.user);
    } catch (error) {
        console.error("Login failed:", error);
    }
};
```

### Add Firebase Firestore Database

```tsx
import { db } from "../config/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

// Add document
const addItem = async (data: any) => {
    try {
        const docRef = await addDoc(collection(db, "items"), data);
        console.log("Document written:", docRef.id);
    } catch (error) {
        console.error("Error adding document:", error);
    }
};

// Fetch documents
const getItems = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "items"));
        querySnapshot.forEach((doc) => console.log(doc.id, doc.data()));
    } catch (error) {
        console.error("Error getting documents:", error);
    }
};
```

---

## 🎨 Styling Guide

### Tailwind CSS

- Primary colors defined in `tailwind.config.js`
- Use utility classes for rapid styling
- Responsive breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`

Example:

```tsx
<div className="p-4 md:p-8 bg-blue-500 text-white rounded-lg">
    Responsive styled content
</div>
```

### Custom CSS

Global styles in `src/index.css`, page-specific in component CSS files.

---

## 🔧 Configuration Files

| File                 | Purpose                    |
| -------------------- | -------------------------- |
| `vite.config.ts`     | Vite bundler configuration |
| `tsconfig.json`      | TypeScript configuration   |
| `tailwind.config.js` | Tailwind theme and plugins |
| `postcss.config.js`  | PostCSS configuration      |
| `eslint.config.js`   | Code linting rules         |

---

## 📦 Key Dependencies

| Package            | Purpose                     |
| ------------------ | --------------------------- |
| `react`            | UI library                  |
| `react-router-dom` | Routing                     |
| `zustand`          | State management            |
| `tailwindcss`      | Styling                     |
| `lucide-react`     | Icons                       |
| `framer-motion`    | Animations (optional)       |
| `firebase`         | Backend services (optional) |

To add new dependencies:

```bash
npm install package-name
```

---

## 🧪 Testing (Optional)

The template includes Vitest setup. Add tests in `__tests__/` folder:

```bash
npm run test
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Set environment variables if needed
5. Deploy!

### Environment Variables

Create `.env.local` in project root:

```
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
# ... other Firebase keys
```

Then use in code:

```tsx
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
```

---

## 🛠️ Troubleshooting

**Hot Module Replacement (HMR) not working?**

- Restart dev server: `npm run dev`
- Check network connection in browser console

**TypeScript errors?**

- Run `npm run build` to see full errors
- Check `tsconfig.json` configuration

**Tailwind styles not applying?**

- Ensure class names are in template files
- Check `tailwind.config.js` content paths
- Run `npm run build` to rebuild styles

**Firebase not connecting?**

- Verify credentials in `src/config/firebase.ts`
- Check Firebase project security rules in console
- Ensure Firebase services are enabled

---

## 📚 Useful Resources

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router Docs](https://reactrouter.com)
- [Zustand Docs](https://github.com/pmndrs/zustand)
- [Firebase Docs](https://firebase.google.com/docs)
- [Vite Docs](https://vitejs.dev)

---

## 🎯 Next Steps for Agents

When working on this project:

1. **Before making changes:** Review the current page/component structure
2. **Page modifications:** Update pages in `src/pages/` folder
3. **New components:** Add to `src/components/` with proper organization
4. **State changes:** Update `src/stores/useAppStore.ts` as needed
5. **Routing changes:** Always update `src/App.tsx`
6. **Environment setup:** Use `.env.local` for sensitive configuration
7. **Testing:** Add unit tests in `__tests__/` folder
8. **Performance:** Keep components focused; use React.memo for large lists

---

**Last Updated:** February 2026
**Template Version:** 1.0
