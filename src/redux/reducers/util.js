export const filterSources = (concepts) => {
  const filteredSources = [];
  if (Array.isArray(concepts)) {
    concepts.map((concept) => {
      if (!filteredSources.includes(concept.source)) {
        return filteredSources.push(concept.source);
      }
      return null;
    });
  }
  return filteredSources;
};

export const filterClass = (concepts) => {
  const filteredClass = [];
  if (Array.isArray(concepts)) {
    concepts.map((concept) => {
      if (!filteredClass.includes(concept.concept_class)) {
        return filteredClass.push(concept.concept_class);
      }
      return null;
    });
  }
  return filteredClass;
};

export const filterPayload = (arr) => {
  const filteredDictionary = [];
  arr.map((repoType) => {
    if (repoType.repository_type === 'OpenMRSDictionary') {
      console.log(filteredDictionary, 'filter');
      return filteredDictionary.push(repoType);
    }
    return filteredDictionary;
  });
  return filteredDictionary;
};
