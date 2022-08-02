package WCCI.FinalProject.CookThis.repository;

import WCCI.FinalProject.CookThis.model.Recipe;
import org.springframework.data.repository.CrudRepository;

public interface RecipeRepo extends CrudRepository<Recipe, Long> {
}
