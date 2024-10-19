import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";

export default function AddNote({ isNoteNeeded }: { isNoteNeeded: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const isFromInside = useRef<boolean>(false);
  
  const handleOpenChange = (open: boolean) => {
    isFromInside.current = true;
    setIsOpen(open);
  };
  if (isOpen !== isNoteNeeded && !isFromInside.current) {
    setIsOpen(isNoteNeeded);
  }
  isFromInside.current = false;
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Would you like to add notes?</DialogTitle>
          <DialogDescription>
            In the future, you would be able to see those notes, after
            encounting randomly this user. You can for example specify the
            reason of blocking here.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Textarea placeholder="Type your notes here." />
          <Button>Save the note</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
