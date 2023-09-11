import { PortableText } from '@portabletext/react';
import React from 'react';


const BlockContent = ({ blocks }) => {
   // Define serializers for various mark types
   const markSerializers = {
    strong: (props) => <strong>{props.children}</strong>,
    em: (props) => <em>{props.children}</em>,
    underline: (props) => <u>{props.children}</u>,
    // Add other mark serializers as needed
  };

  // Define serializers for different block types
  const blockSerializers = {
    heading1: (props) => <h1>{props.children}</h1>,
    heading2: (props) => <h2>{props.children}</h2>,
    heading3: (props) => <h3>{props.children}</h3>,
    // Add other block serializers as needed
  };

  // Define a serializer for the list type
  const listSerializer = (props) => {
    const { type, children } = props.node;
    if (type === 'bullet') {
      return <ul>{children}</ul>;
    } else if (type === 'number') {
      return <ol>{children}</ol>;
    }
    return null;
  };

  // Combine mark serializers, block serializers, and other serializers
  const serializers = {
    marks: markSerializers,
    types: blockSerializers,
    // Add other serializers for different types as needed
    list: listSerializer,
  };

  return <PortableText blocks={blocks} serializers={serializers} />;
};

export default BlockContent;
