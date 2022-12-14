package WCCI.FinalProject.CookThis.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import java.util.Objects;

@Entity
public class Ingredient {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String imageUrl;
    private String description;
    private String ingredientMeasurement;
    private int spiceLevel;
    private String spicePeppers;


    @ManyToOne @JsonIgnore
    private Recipe recipe;

    public Ingredient(String name, String imageUrl, String description, String ingredientMeasurement, int spiceLevel, Recipe recipe) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
        this.ingredientMeasurement = ingredientMeasurement;
        this.spiceLevel = spiceLevel;
        String peppers = "";
        for(int i = 0; i<spiceLevel; i++){
            peppers += "&#x1F336;";
        }
        this.spicePeppers = peppers;
        this.recipe = recipe;
    }
    public Ingredient() {
    }

    public Long getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public String getImageUrl() {
        return imageUrl;
    }
    public String getDescription() {
        return description;
    }
    public int getSpiceLevel() {
        return spiceLevel;
    }
    public String getIngredientMeasurement() {
        return ingredientMeasurement;
    }
    public String getSpicePeppers() {
        return spicePeppers;
    }
    public Recipe getRecipe() {
        return recipe;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Ingredient that = (Ingredient) o;
        return spiceLevel == that.spiceLevel && Objects.equals(id, that.id) && Objects.equals(name, that.name) && Objects.equals(imageUrl, that.imageUrl) && Objects.equals(description, that.description) && Objects.equals(ingredientMeasurement, that.ingredientMeasurement) && Objects.equals(spicePeppers, that.spicePeppers) && Objects.equals(recipe, that.recipe);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, imageUrl, description, ingredientMeasurement, spiceLevel, spicePeppers, recipe);
    }
}


