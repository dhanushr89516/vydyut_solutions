// Type declarations for compile-time process.env replacements.
// These are injected by esbuild via angular.json's `define` field.
declare const process: {
  env: {
    EMAILJS_SERVICE_ID: string;
    EMAILJS_TEMPLATE_ID: string;
    EMAILJS_PUBLIC_KEY: string;
    [key: string]: string;
  };
};
