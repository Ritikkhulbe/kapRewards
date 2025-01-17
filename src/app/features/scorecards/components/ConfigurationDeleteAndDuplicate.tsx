import DeleteIcon from '@/app/assets/icons/DeleteIcon'
import Duplicate from '@/app/assets/icons/Duplicate'
import ThreeDots from '@/app/assets/icons/ThreeDots'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { deleteConfiguration } from '../fetcher'


const ConfigurationDeleteAndDuplicate = ({ name, id }: { name?: string, id:number }) => {

    const handleDelete = async() => {
        await deleteConfiguration(id);
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="hover:bg-fourth border-none rounded-full p-1 transition-all duration-700">
                <ThreeDots />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="origin-top-right rounded-[8px] p-0" align="end">
                <DropdownMenuItem><Duplicate />Duplicate</DropdownMenuItem>
                <DropdownMenuItem onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                }}>
                    <Dialog>
                        <DialogTrigger className='flex gap-1 items-center w-full h-full cursor-pointer'>
                            <DeleteIcon />Delete
                        </DialogTrigger>
                        <DialogContent className='w-[400px] rounded-xl'>
                            <DialogHeader>
                                <DialogTitle className='pb-5'>Delete Scorecard</DialogTitle>
                                <p>
                                    Are you sure you want to permanently delete the scorecard '<span className='font-bold whitespace-nowrap'>{name}</span>'?
                                </p>
                            </DialogHeader>
                            <DialogFooter className='pt-4'>
                                <Button className='bg-primary shadow-none rounded-[8px] border px-7 border-fourth hover:bg-fourth'>Cancel</Button>
                                <Button className='bg-third rounded-[8px] px-8 shadow-none border hover:bg-fourth' onClick={()=>handleDelete}>Delete</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ConfigurationDeleteAndDuplicate