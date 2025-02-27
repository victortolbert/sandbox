import { SparklesPreviewDark } from '@/components/sparkles-preview-dark';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Demo',
        href: '/demo',
    },
];

export default function Demo() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Demo" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">

                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 rounded-xl border md:min-h-min">
                    <SparklesPreviewDark />
                </div>
            </div>
        </AppLayout>
    );
}
