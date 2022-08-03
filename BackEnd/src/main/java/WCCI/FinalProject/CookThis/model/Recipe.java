package WCCI.FinalProject.CookThis.model;


import WCCI.FinalProject.CookThis.repository.RecipeRepo;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Recipe {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @ElementCollection
    private Collection<Step> steps;

    private String picOfDish;
    @ManyToMany
    @JsonIgnore
    private Collection<Category> categories;
    @ElementCollection
    private Collection<Ingredient> ingredients;

    @ElementCollection
    private Collection<Review> comments;

    public Recipe(String name, String picOfDish,Category ... categories) {
        this.steps = new ArrayList<>();
        this.name = name;
        this.picOfDish = picOfDish;
        this.categories = Arrays.asList(categories);
        this.ingredients = new ArrayList<>();

    }

    public Recipe() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Collection<Step> getSteps() {
        return steps;
    }

    public String getPicOfDish() {
        return picOfDish;
    }

    public Collection<Category> getCategories() {
        return categories;
    }

    public Collection<Ingredient> getIngredients() {
        return ingredients;
    }

    public Collection<Review> getComments() {
        return comments;
    }

    public void addComments(Review newComment) {
        comments.add(newComment);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Recipe recipe = (Recipe) o;
        return id == recipe.id && Objects.equals(name, recipe.name) && Objects.equals(picOfDish, recipe.picOfDish);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, picOfDish);
    }

    public void addStep(Step step1) {
        steps.add(step1);
    }

    public void addIngredient(Ingredient ingredient1) {
        ingredients.add(ingredient1);
    }
}

