import { ZodOpenApiObject, ZodOpenApiPathsObject } from 'zod-openapi';
import { OpenApiMeta, type OpenAPIObject, OpenApiRouter, type SecuritySchemeObject } from '../types';
export interface GenerateOpenApiDocumentOptions<TMeta = Record<string, unknown>> {
    title: string;
    description?: string;
    version: string;
    openApiVersion?: ZodOpenApiObject['openapi'];
    baseUrl: string;
    docsUrl?: string;
    tags?: string[];
    securitySchemes?: Record<string, SecuritySchemeObject>;
    paths?: ZodOpenApiPathsObject;
    /**
     * Optional filter function to include/exclude procedures from the generated OpenAPI document.
     *
     * The function receives a context object with the procedure's metadata as `ctx.metadata`.
     * Return `true` to include the procedure, or `false` to exclude it from the OpenAPI output.
     *
     * @example
     *   filter: ({ metadata }) => metadata.isPublic === true
     */
    filter?: (ctx: {
        metadata: {
            openapi: NonNullable<OpenApiMeta['openapi']>;
        } & TMeta;
    }) => boolean;
}
export declare const generateOpenApiDocument: <TMeta = Record<string, unknown>>(appRouter: OpenApiRouter, opts: GenerateOpenApiDocumentOptions<TMeta>) => OpenAPIObject;
//# sourceMappingURL=index.d.ts.map