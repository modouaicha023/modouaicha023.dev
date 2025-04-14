"use client";

import { useEffect, useState } from "react";
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  codeBlockPlugin,
  frontmatterPlugin,
  linkPlugin,
  MDXEditor,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

interface MDXEditorComponentProps {
  initialContent: string;
  onChange: (markdown: string) => void;
  readOnly?: boolean;
}

export default function MDXEditorComponent({
  initialContent,
  onChange,
  readOnly = false,
}: MDXEditorComponentProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div>Chargement de l'éditeur...</div>;

  return (
    <MDXEditor
      markdown={initialContent}
      onChange={onChange}
      readOnly={readOnly}
      contentEditableClassName="prose dark:prose-invert"
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        codeBlockPlugin(),
        linkPlugin(),
        frontmatterPlugin(),
      ]}
    />
  );
}
