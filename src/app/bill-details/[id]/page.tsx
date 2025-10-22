import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ArrowLeft01Icon, Calendar03Icon, Edit02Icon, FileDownloadIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export default function BillDetailsPage() {
    return (
        <div className="flex flex-col w-full h-full p-4">
            <Link href="http://192.168.1.2:3000" className="flex items-center text-zinc-900 my-4 gap-2 hover:underline">
                <HugeiconsIcon icon={ArrowLeft01Icon} size={16} strokeWidth={1.5} className='text-zinc-500' />
                Voltar
            </Link>
            <Card>
                <CardHeader className="flex items-center justify-between">
                    <CardTitle>Cartão NuBank</CardTitle>
                    <Button variant="ghost" size="icon-sm" aria-label="Anexar comprovante" className='max-sm:text-[12px] bg-zinc-50'>
                        <HugeiconsIcon icon={Edit02Icon} size={16} color="currentColor" strokeWidth={1.5} />
                    </Button>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between">
                        <span className="text-zinc-600 text-xs">Vence todo dia</span>
                        <span className="font-semibold text-zinc-900 text-right text-[13px]">20</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-zinc-600 text-xs">Referente a</span>
                        <span className="font-semibold text-zinc-900 text-right text-[13px]">Novembro/2025</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-zinc-600 text-xs">Categoria</span>
                        <span className="font-semibold text-zinc-900 text-right text-[13px]">Casa</span>
                    </div>
                    <div className="flex justify-between text-xs">
                        <span className="text-zinc-600">Valor</span>
                        <span className="font-semibold text-zinc-900 text-right text-[13px]">R$ 109,90</span>
                    </div>
                </CardContent>
                <CardContent>
                    <div className="flex justify-between">
                        <span className="text-zinc-600 text-xs">Reconte</span>
                        <span className="font-semibold text-zinc-900 text-right text-[13px]">Sim</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-zinc-600 text-xs">Código</span>
                        <span className="font-semibold text-zinc-900 text-right text-[13px] w-[60%] truncate">23487h4837424h523h3dbf3823</span>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="flex w-full items-center gap-2">
                        <HugeiconsIcon icon={FileDownloadIcon} size={16} strokeWidth={1.5} className='text-zinc-500' />
                        Baixar comprovante
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}