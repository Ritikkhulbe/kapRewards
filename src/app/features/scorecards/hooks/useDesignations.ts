import { useState, useEffect } from 'react';
import { getDesignations } from '../fetcher';

export const useDesignation = () => {
  const [designations, setDesignations] = useState<any[]>([]); // Adjust type if needed
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDesignations = async () => {
      try {
        const response = await getDesignations();
        setDesignations(response);
      } catch (err) {
        setError('Failed to fetch designations');
      } finally {
        setLoading(false);
      }
    };

    fetchDesignations();
  }, []);

  return { designations, loading, error };
};
