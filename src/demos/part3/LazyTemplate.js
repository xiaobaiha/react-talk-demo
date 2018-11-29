import React, {Suspense} from 'react';
const MyButton = React.lazy(() => import('./MemoTemplate'));

export function LazyComponent() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <MyButton />
            </Suspense>
        </div>
    );
}

export const Template = 
`
import React, {Suspense} from 'react';
const MyButton = React.lazy(() => import('./MemoTemplate'));

export function LazyComponent() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <MyButton />
            </Suspense>
        </div>
    );
}
`;