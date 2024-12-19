import { toast } from 'sonner';
import { CustomGraphQLError } from '../types';

export const successToast = (message: string) => {
  toast.success('Success', {
    description: message,
  });
};

export const errorToast = (message: string) => {
  toast.error('Error', {
    description: message,
  });
};

export const warningToast = (message: string) => {
  toast.warning('Warning', {
    description: message,
  });
};

export const defaultToast = (message: string) => {
  toast.info('Info', {
    description: message,
  });
};

export const formatGraphQlErrors = (error: CustomGraphQLError): CustomGraphQLError => {
  switch (error.code) {
    case 'CUSTOM_ERROR':
    case 'PRISMA_ERROR':
    case 'ZOD_ERROR': {
      return error;
    }
    case 'GRAPHQL_PARSE_FAILED': {
      return {
        ...error,
        message: 'Malformed request syntax. Please verify your GraphQL query.',
      };
    }
    case 'GRAPHQL_VALIDATION_FAILED': {
      return {
        ...error,
        message: 'Invalid GraphQL query. Please ensure your query matches the schema.',
      };
    }
    case 'PERSISTED_QUERY_NOT_FOUND':
    case 'PERSISTED_QUERY_NOT_SUPPORTED': {
      return {
        ...error,
        message: 'The requested persisted query was not found or is not supported.',
      };
    }
    case 'OPERATION_RESOLUTION_FAILURE': {
      return {
        ...error,
        message:
          'Failed to resolve the requested operation. Please check your query and try again.',
      };
    }
    case 'BAD_USER_INPUT':
    case 'BAD_REQUEST':
    case 'VALIDATION_ERROR': {
      return {
        ...error,
        message: 'Invalid input. Please check your request and try again.',
      };
    }
    case 'INTERNAL_SERVER_ERROR': {
      return {
        ...error,
        message: 'An unexpected error occurred on the server. Please try again later.',
      };
    }
    default: {
      return { ...error, message: error.message || 'An unknown error occurred.' };
    }
  }
};
