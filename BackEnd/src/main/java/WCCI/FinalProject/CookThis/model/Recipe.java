package WCCI.FinalProject.CookThis.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import java.util.*;

@Entity
public class Recipe {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @ElementCollection
    private List<Step> steps;
    private String picOfDish;
    @ManyToMany
    @JsonIgnore
    private Collection<Category> categories;
    @OneToMany(mappedBy="recipe")
    private Collection<Ingredient> ingredients;
    @ManyToMany(mappedBy="favoriteRecipes")
    @JsonIgnore
    private Collection<SiteUser> siteUsers;
    @ElementCollection
    private Collection<Review> reviews;
    private double avgRating;

    public Recipe(String name, String picOfDish, Category... categories) {
        this.steps = new ArrayList<>();
        this.name = name;
        this.picOfDish = picOfDish;
        this.categories = Arrays.asList(categories);
        this.ingredients = new ArrayList<>();
        this.reviews = new ArrayList<>();
        this.avgRating = updateAvgRating();
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
    public Collection<Review> getReviews() {
        return reviews;
    }
    public Step getSingleStep(Integer indexOfStep) {
        return steps.get(indexOfStep);
    }
    public double getAvgRating() {
        this.avgRating = updateAvgRating();
        return avgRating;
    }
    public void addReview(Review newReview) {
        reviews.add(newReview);
    }
    public void updateSingleStep(Integer indexOfStep, Step newStep) {
        steps.remove(steps.get(indexOfStep));
        steps.add(indexOfStep, newStep);
    }

    public Collection<SiteUser> getSiteUsers() {
        return siteUsers;
    }

    public void addStep(Step step1) {
        steps.add(step1);
    }
    public void addIngredient(Ingredient ingredientToAdd) {
        ingredients.add(ingredientToAdd);
    }
    public void changeName(String newName) {
        name = newName;
    }
    public void deleteSteps() {
        steps.removeAll(steps);
    }
    public void deleteSingleStep(int stepIndexToRemove) {
        steps.remove(stepIndexToRemove);
    }
    public double updateAvgRating() {
        double sum = 0;
        for (Review rating : reviews) {
            sum += rating.getRating();
        }
        return Math.round((((sum / reviews.size()) * 10)) / 10);
    }
    public void deleteIngredients() {
        ingredients.removeAll(ingredients);
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

    public void addCategory(Category category) {
        categories.add(category);
    }
}
