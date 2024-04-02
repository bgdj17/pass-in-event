import { Search, MoreHorizontal, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react'

export function AttendeeList() {
    return (
        <div className='flex flex-col gap-4'>
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold"> Participante </h1>
                <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
                    <Search className='size-4 text-emerald-300' />
                    <input className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" type="text" placeholder="Buscar participante..." />
                </div>
            </div>


            <div className='border border-white/10 rounded-lg'>
                <table className='w-full'>
                    <thead>
                        <tr className='border-b border-white/10'>
                            <th className='py-3 px-4 font-semibold text-sm text-left'>
                                <input type="checkbox" className="bg-black/20 rounded border-white/10" />
                            </th>
                            <th style={{ width: 48 }} className='py-3 px-4 font-semibold text-sm text-left'>Código</th>
                            <th className='py-3 px-4 font-semibold text-sm text-left'>Participante</th>
                            <th className='py-3 px-4 font-semibold text-sm text-left'>Data de inscrição</th>
                            <th className='py-3 px-4 font-semibold text-sm text-left'>Data do Check-in</th>
                            <th style={{ width: 64 }} className='py-3 px-4 font-semibold text-sm text-left'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 8 }).map((_, i) => {
                            return (
                                <tr className='border-b border-white/10 hover:bg-white/5' key={i}>
                                    <td className='py-3 px-4 text-left text-sm text-zinc-300'>
                                        <input type="checkbox" className="bg-black/20 rounded border-white/10 -orange-400" />
                                    </td>
                                    <td className='py-3 px-4 text-left text-sm text-zinc-300'>123</td>
                                    <td className='py-3 px-4 text-left text-sm text-zinc-300'>
                                        <div className='flex flex-col gap-1'>
                                            <span className='font-semibold text-white'>Bruna Jesus</span>
                                            <span className='font-semibold text-white'>bruna@teste</span>
                                        </div>
                                    </td>
                                    <td className='py-3 px-4 text-left text-sm text-zinc-300'>7 dias atrás</td>
                                    <td className='py-3 px-4 text-left text-sm text-zinc-300'>3 dias atrás</td>
                                    <td className='py-3 px-4 text-left text-sm text-zinc-300'>
                                        <button className='bg-black/20 border border-white/10 rounded-md p-1.5'><MoreHorizontal className='size-4' /></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3} className='py-3 px-4 text-left text-sm text-zinc-300'>Mostrando 10 de 100</td>
                            <td colSpan={3} className='py-3 px-4 text-right text-sm text-zinc-300'>
                                <div className='inline-flex items-center gap-8'>
                                    <span>Página 1 de 23</span>
                                    <div className='flex gap-1.5'>
                                        <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                                            <ChevronLeft className='size-4' />
                                        </button>
                                        <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                                            <ChevronRight className='size-4' />
                                        </button>
                                        <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                                            <ChevronsRight className='size-4' />
                                        </button>

                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>
    )
}