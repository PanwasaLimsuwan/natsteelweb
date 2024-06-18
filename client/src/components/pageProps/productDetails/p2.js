
  // const renderDescription = () => {
  //   // Helper function to process each description
  //   const processDescription = (description) => {
  //     if (!description) return null; // Return null if no description is provided

  //     return description.split(/:(.*?)-/).map((part, index) => (
  //       <span key={index} style={index % 2 === 1 ? highlightStyle : {}}>
  //         {part}
  //       </span>
  //     ));
  //   };

  //   // Process all descriptions, safely handling if any are undefined
  //   const description = [];
  //   if (productInfo.des) description.push(productInfo.des);
  //   if (productInfo.des2) description.push(productInfo.des2);
  //   if (productInfo.des3) description.push(productInfo.des3);
  //   if (productInfo.des4) description.push(productInfo.des4);
  //   // Render only existing descriptions
  //   return (
  //     <>
  //       {description.map((desc, index) => (
  //         <React.Fragment key={index}>
  //           {processDescription(desc)}
  //           <br />
  //           <br />
  //         </React.Fragment>
  //       ))}
  //     </>
  //   );
  // };
