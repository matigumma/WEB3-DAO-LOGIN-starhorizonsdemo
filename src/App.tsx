import React, { FC } from 'react';
import { Switch } from 'react-router-dom';
import { useFirebaseApp } from 'reactfire';
import { getAuth } from "firebase/auth";
import { Navigation } from './Navigation';
import { AppProvider } from './hooks/index';

import { Route } from './router';
// import { useSearchParam } from 'react-use';

// export function Check({ children }: { children: React.ReactNode }): JSX.Element {
//     const { status, data: signInCheckResult } = useSigninCheck();
//     if (status === 'loading') {
//         return (
//         <div className="flex justify-center">
//             <svg
//             className="w-5 h-5 text-white animate-spin"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             >
//             <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//             />
//             <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//             />
//             </svg>
//       </div>);
//     }
//     if (signInCheckResult.signedIn === false) {
//         return children as JSX.Element;
//     }

//     return <>Must login</>
// }

const App: FC = () => {
    const firebaseApp = useFirebaseApp();
    const auth = getAuth(firebaseApp);

    return (
        <AppProvider sdk={auth}>
            <Switch>
                <Route path="/" component={Navigation} />
            </Switch>
        </AppProvider>
    );
};

export default App;