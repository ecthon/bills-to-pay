'use client'
import { HugeiconsIcon } from '@hugeicons/react'
import { AddInvoiceIcon, ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { Button } from '@/components/ui/button';

export function CardBill() {
    return (
        <div className="flex w-full justify-between bg-zinc-50  p-3 rounded-lg">
            <div className="flex items-center space-x-2">
                <p className="flex items-center justify-center text-sm rounded-md text-zinc-700 max-sm:text-[13px] font-bold size-8 bg-zinc-100">31</p>
                <p className="text-sm max-sm:text-[13px] text-zinc-700">Cartão NuBank</p>
            </div>
            <div className='flex w-auto gap-2 items-center justify-between'>
                <Button variant="ghost" size="icon-sm" aria-label="Anexar comprovante" className='max-sm:text-[12px] bg-zinc-50'>
                    <HugeiconsIcon icon={AddInvoiceIcon} size={16} color="currentColor" strokeWidth={1.5} />
                </Button>
                <Button variant="ghost" size="icon-sm" aria-label="Anexar comprovante" className='max-sm:text-[12px] bg-zinc-50'>
                    <HugeiconsIcon icon={ArrowRight01Icon} size={16} color="currentColor" strokeWidth={1.5} />
                </Button>
            </div>

        </div>
    )
}