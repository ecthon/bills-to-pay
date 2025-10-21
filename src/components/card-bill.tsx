'use client'
import { HugeiconsIcon } from '@hugeicons/react'
import { AddInvoiceIcon, ArrowRight01Icon, CloudUploadIcon } from '@hugeicons/core-free-icons'
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function CardBill() {
    return (
        <div className="flex w-full justify-between bg-zinc-50  p-3 rounded-lg">
            <div className="flex items-center space-x-2">
                <p className="flex items-center justify-center text-sm rounded-md text-zinc-700 max-sm:text-[13px] font-bold size-8 bg-zinc-100">31</p>
                <p className="text-sm max-sm:text-[13px] text-zinc-700">Cartão NuBank</p>
            </div>
            <div className='flex w-auto gap-2 items-center justify-between'>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="ghost" size="icon-sm" aria-label="Anexar comprovante" className='max-sm:text-[12px] bg-zinc-50'>
                            <HugeiconsIcon icon={AddInvoiceIcon} size={16} color="currentColor" strokeWidth={1.5} />
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className='flex my-2'>Anexar comprovante</DialogTitle>
                            {/* <DialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </DialogDescription> */}
                            <Label htmlFor="file" className="flex flex-col items-center justify-center p-12 cursor-pointer border-2 border-dashed rounded-md text-center hover:bg-zinc-100 transition-colors">
                                <HugeiconsIcon icon={CloudUploadIcon} size={40} strokeWidth={1.5} className='text-zinc-500' />
                                <div className='flex flex-col w-full items-center justify-center'>
                                    <p className="flex justify-center w-full font-bold text-md text-zinc-800 mb-4">Escolher arquivo.</p>
                                    <p className="flex justify-center w-full text-xs text-muted-foreground">PDF, PNG, JPG, WEBP</p>
                                    <p className="flex justify-center w-full text-xs text-muted-foreground">(máx. 10MB por arquivo)</p>
                                </div>
                                <Input id="file" type="file" className="sr-only" accept=".pdf,.png,.jpg,.jpeg,.webp" />
                            </Label>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
                <Button variant="ghost" size="icon-sm" aria-label="Anexar comprovante" className='max-sm:text-[12px] bg-zinc-50'>
                    <HugeiconsIcon icon={ArrowRight01Icon} size={16} color="currentColor" strokeWidth={1.5} />
                </Button>
            </div>
        </div>
    )
}
