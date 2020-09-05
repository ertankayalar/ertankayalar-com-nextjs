import Link from 'next/link'

export default function PageHeader({ pageTitle, pageDescription }) {
    return (
        <div class="w-full bg-primary-500 text-white py-10">
        <div class="container mx-auto my-auto">
            <h1 class="text-4xl font-semibold">{pageTitle}</h1>

            <p class="text-lg font-normal">{pageDescription}</p>

        </div>
    </div>

    )
}
