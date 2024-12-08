"use client";

import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import {
  BoldIcon,
  ItalicIcon,
  ListTodoIcon,
  LucideIcon,
  MessageSquarePlusIcon,
  PrinterIcon,
  RedoIcon,
  RemoveFormattingIcon,
  SpellCheckIcon,
  UnderlineIcon,
  UndoIcon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface ToolbarButtonProps {
  onClick: () => void;
  icon: LucideIcon;
  isActive: boolean;
}

const ToolbarButton = ({
  onClick,
  icon: Icon,
  isActive,
}: ToolbarButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center justify-center rounded-sm h-7 min-w-7 hover:bg-neutral-200/80 text-sm",
        isActive ? "bg-neutral-200/80" : ""
      )}
    >
      <Icon />
    </button>
  );
};

export const Toolbar = () => {
  const { editor } = useEditorStore();
  const sections: {
    label: string;
    icon: LucideIcon;
    isActive: boolean;
    onClick: () => void;
  }[][] = [
    [
      {
        label: "undo",
        icon: UndoIcon,
        isActive: false,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "redo",
        icon: RedoIcon,
        isActive: false,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: "print",
        icon: PrinterIcon,
        isActive: false,
        onClick: () => window.print(),
      },
      {
        label: "Spell Check",
        icon: SpellCheckIcon,
        isActive: editor?.view.dom.getAttribute("spellcheck") ? true : false,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "true" ? "false" : "true"
          );
        },
      },
    ],
    [
      {
        label: "Bold",
        icon: BoldIcon,
        isActive: editor?.isActive("bold") ? true : false,
        onClick: () => editor?.chain().focus().toggleBold().run(),
      },
      {
        label: "Italic",
        icon: ItalicIcon,
        isActive: editor?.isActive("italic") ? true : false,
        onClick: () => editor?.chain().focus().toggleItalic().run(),
      },
      {
        label: "Underline",
        icon: UnderlineIcon,
        isActive: editor?.isActive("underline") ? true : false,
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
      },
    ],
    [
      {
        label: "Comment",
        icon: MessageSquarePlusIcon,
        isActive: false,
        onClick: () => console.log("TODO: Comment"),
      },
      {
        label: "List Todo",
        icon: ListTodoIcon,
        isActive: editor?.isActive("taskList") ? true : false,
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
      },
      {
        label: "Remove Formatting",
        icon: RemoveFormattingIcon,
        isActive: false,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
      },
    ],
  ];
  return (
    <div className="flex items-center gap-x-0.5 overflow-x-auto min-h-10 px-2.5 py-0.5 bg-[#F1F4F9] rounded-[24px]">
      {sections[0].map((section) => (
        <ToolbarButton key={section.label} {...section} />
      ))}
      <Separator orientation="vertical" className="h-6 bg-neutral-300 mx-2" />
      {/* TODO: Font Family */}
      <Separator orientation="vertical" className="h-6 bg-neutral-300 mx-2" />
      {/* TODO: Heading */}
      <Separator orientation="vertical" className="h-6 bg-neutral-300 mx-2" />
      {/* TODO: Font Size */}
      <Separator orientation="vertical" className="h-6 bg-neutral-300 mx-2" />
      {sections[1].map((section) => (
        <ToolbarButton key={section.label} {...section} />
      ))}
      <Separator orientation="vertical" className="h-6 bg-neutral-300 mx-2" />
      {/* TODO: Text Color */}
      {/* TODO: Highlight Color */}
      <Separator orientation="vertical" className="h-6 bg-neutral-300 mx-2" />
      {/* TODO: Text Color */}
      {/* TODO: Highlight Color */}
      {/* TODO: Highlight Color */}
      {/* TODO: Highlight Color */}
      {/* TODO: Highlight Color */}
      <Separator orientation="vertical" className="h-6 bg-neutral-300 mx-2" />
      {sections[2].map((section) => (
        <ToolbarButton key={section.label} {...section} />
      ))}
    </div>
  );
};
