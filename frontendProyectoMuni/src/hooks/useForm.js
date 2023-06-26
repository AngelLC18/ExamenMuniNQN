import { useState } from 'react';

export const useForm = (initialForm, validateoform) => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = e => {};

  const handleBlur = e => {};
  const handleSubmit = e => {};

  return [
    form,
    error,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  ];
};
