/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * An error returned from Tesseral.
 */
export interface ApiError {
    /** A developer-facing error message, such as "not_found". These are stable, and you can develop code that matches against them. */
    message?: string;
    /** Additional details about this error. */
    details?: unknown[];
}
