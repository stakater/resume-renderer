import React, { createElement, Fragment, useEffect, useMemo } from "react";
import { marked } from "marked";
import { CWPBlock } from "./extensions";
import ReactHtmlParser, { processNodes } from "react-html-parser";
import DocumentPage from "./document-page";
import DOMPurify from "dompurify";
import {
  Box,
  CircularProgress,
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

export interface IMarkedRenderer {
  value?: string;
}

const MarkupRenderer = ({ value }: IMarkedRenderer) => {
  useEffect(() => {
    marked.use({ extensions: [CWPBlock] });
  }, []);

  return useMemo(() => {
    if (value === undefined) {
      return (
        <Box textAlign="center">
          <CircularProgress color={"secondary"} />
        </Box>
      );
    } else if (value === "") {
      return (
        <Box p={4} textAlign="center" color="secondary.main">
          <h4>No document found for this page</h4>
        </Box>
      );
    }

    try {
      return createElement(
        Fragment,
        null,
        ReactHtmlParser(
          DOMPurify.sanitize(marked.parse(value || ""), {
            ALLOWED_TAGS: [
              "Documentpage",
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "p",
              "i",
              "ol",
              "li",
              "ul",
              "a",
              "img",
              "table",
              "tbody",
              "thead",
              "tr",
              "td",
              "th",
              "code",
            ],
          }),
          {
            transform,
          }
        )
      );
    } catch (err) {
      return <>Error processing document</>;
    }
  }, [value]);
};

export const transform = (node: any, key: any) => {
  switch (node.name) {
    case "img":
      return (
        <img
          {...node.attribs}
          key={key}
          alt="document-image"
          style={{ maxWidth: "80%" }}
        />
      );
    case "documentpage": //TODO create CV tags here
      return createElement(
        DocumentPage,
        { ...node.attribs, key },
        processNodes(node.children, transform)
      );
    case "table":
      return (
        <Table key={key} size="small" {...node.attribs}>
          {processNodes(node.children, transform)}
        </Table>
      );
    case "tr":
      return (
        <TableRow hover key={key} {...node.attribs}>
          {processNodes(node.children, transform)}
        </TableRow>
      );
    case "thead":
      return (
        <TableHead key={key} {...node.attribs}>
          {processNodes(node.children, transform)}
        </TableHead>
      );
    case "th":
    case "td":
      return (
        <TableCell key={key} {...node.attribs}>
          {processNodes(node.children, transform)}
        </TableCell>
      );
    default:
      if (node.type != "tag") {
        return node.data;
      }
      return createElement(
        node.name,
        { ...node.attribs, key },
        processNodes(node.children, transform)
      );
  }
};
export default MarkupRenderer;
