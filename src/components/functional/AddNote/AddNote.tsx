import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export default function AddNote({ isNoteNeeded }: { isNoteNeeded: boolean }) {
  if (!isNoteNeeded) return null;

  return (
    <Dialog open={isNoteNeeded}>
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
          <Button>Send message</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
