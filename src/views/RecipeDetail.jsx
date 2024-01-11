import { useNavigate } from "react-router-dom";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "./RecipeDetail.css";

const RecipeDetail = ({ selectedRecipe }) => {
  const navigate = useNavigate();
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text) => <em>{text}</em>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    },
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="recipe-detail">
      <div className="title">
        <button className="back" onClick={handleBackClick}>
          Back
        </button>
        <h2 className="recipe-title">{selectedRecipe.fields.title}</h2>
        <span></span>
      </div>
      <div className="recipe-container">
        <img src={selectedRecipe.fields.images[0].fields.file.url} />
        <div className="ingredients">
          {documentToReactComponents(
            selectedRecipe.fields.ingredientList,
            options
          )}
        </div>
        <div className="instructions">
          {documentToReactComponents(
            selectedRecipe.fields.preparationInstructions,
            options
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
