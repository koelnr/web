function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function parseInline(raw: string) {
  let output = escapeHtml(raw);

  output = output.replace(
    /\[([^\]]+)\]\((mailto:[^\s)]+|https?:\/\/[^\s)]+)\)/g,
    '<a href="$2" class="text-primary underline underline-offset-2">$1</a>',
  );
  output = output.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  output = output.replace(/\*(.+?)\*/g, "<em>$1</em>");

  return output;
}

export function markdownToHtml(markdown: string) {
  const lines = markdown.split(/\r?\n/);
  const chunks: string[] = [];

  let inUnorderedList = false;
  let inOrderedList = false;

  const closeLists = () => {
    if (inUnorderedList) {
      chunks.push("</ul>");
      inUnorderedList = false;
    }
    if (inOrderedList) {
      chunks.push("</ol>");
      inOrderedList = false;
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed === "") {
      closeLists();
      continue;
    }

    if (trimmed === "---") {
      closeLists();
      chunks.push('<hr class="my-6 border-border" />');
      continue;
    }

    if (trimmed.startsWith("### ")) {
      closeLists();
      chunks.push(`<h3>${parseInline(trimmed.slice(4))}</h3>`);
      continue;
    }

    if (trimmed.startsWith("## ")) {
      closeLists();
      chunks.push(`<h2>${parseInline(trimmed.slice(3))}</h2>`);
      continue;
    }

    if (trimmed.startsWith("# ")) {
      closeLists();
      chunks.push(`<h1>${parseInline(trimmed.slice(2))}</h1>`);
      continue;
    }

    if (trimmed.startsWith("- ")) {
      if (inOrderedList) {
        chunks.push("</ol>");
        inOrderedList = false;
      }
      if (!inUnorderedList) {
        chunks.push('<ul class="list-disc pl-5 space-y-2">');
        inUnorderedList = true;
      }
      chunks.push(`<li>${parseInline(trimmed.slice(2))}</li>`);
      continue;
    }

    if (/^\d+\.\s/.test(trimmed)) {
      if (inUnorderedList) {
        chunks.push("</ul>");
        inUnorderedList = false;
      }
      if (!inOrderedList) {
        chunks.push('<ol class="list-decimal pl-5 space-y-2">');
        inOrderedList = true;
      }
      chunks.push(`<li>${parseInline(trimmed.replace(/^\d+\.\s/, ""))}</li>`);
      continue;
    }

    closeLists();
    chunks.push(`<p>${parseInline(trimmed)}</p>`);
  }

  closeLists();

  return chunks.join("\n");
}
