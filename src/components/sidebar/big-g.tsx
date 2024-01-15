"use client"

import useSpecialHighlight from '@/hooks/use-special-highlight';
import clsx from 'clsx';
import { HTMLAttributes, useRef } from 'react';

export type BigGProps = HTMLAttributes<HTMLDivElement>;

export default function BigG(props: BigGProps) {
    const rootRef = useRef<HTMLDivElement>(null);
    const highlightStyles = useSpecialHighlight(rootRef);

    return (
        <div ref={rootRef} {...props} className={clsx('flex justify-center items-center', props.className)}>
            <h1 className={'text-outlined text-8xl font-bold text-white'} style={highlightStyles}>
                GM
            </h1>
        </div>
    );
}