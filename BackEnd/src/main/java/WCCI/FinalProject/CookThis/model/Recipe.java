package WCCI.FinalProject.CookThis.model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
public class Recipe {
    @Id
    @GeneratedValue
    private long id;

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

    public Recipe(String picOfDish) {
        this.steps = new ArrayList<>();
        this.picOfDish = picOfDish;
        this.ingredients = new ArrayList<>();

    }

    public Recipe() {
    }

    public long getId() {
        return id;
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
}
