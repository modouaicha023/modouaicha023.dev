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
  toolbarPlugin,
  imagePlugin,
  KitchenSinkToolbar,
  codeMirrorPlugin,
  linkDialogPlugin,
  tablePlugin,
  AdmonitionDirectiveDescriptor,
  directivesPlugin,
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

  if (!mounted) return <div>Chargement de l&apos;éditeur...</div>;

  return (
    <MDXEditor
      className="dark-theme dark-editor border"
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
        linkDialogPlugin(),
        frontmatterPlugin(),
        tablePlugin(),
        codeMirrorPlugin({
          codeBlockLanguages: {
            js: "JavaScript",
            css: "CSS",
            txt: "text",
            tsx: "TypeScript",
          },
        }),
        toolbarPlugin({ toolbarContents: () => <KitchenSinkToolbar /> }),
        imagePlugin({
          imageUploadHandler: () => {
            return Promise.resolve("https://picsum.photos/200/300");
          },
          imageAutocompleteSuggestions: [
            "https://picsum.photos/200/300",
            "https://picsum.photos/200",
          ],
        }),
        directivesPlugin({
          directiveDescriptors: [AdmonitionDirectiveDescriptor],
        }),
      ]}
    />
  );
}
