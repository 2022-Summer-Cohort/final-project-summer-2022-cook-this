package WCCI.FinalProject.CookThis.model;

import javax.persistence.*;

@Embeddable
public class Review {

    private String author;

    private String content;

    private double rating;
    @ManyToOne
    private Recipe recipe;

    public Review(String author, String content, double rating, Recipe recipe) {
        this.author = author;
        this.content = content;
        this.rating = rating;
        this.recipe = recipe;
    }

    public Review() {
    }


    public String getAuthor() {
        return author;
    }

    public String getContent() {
        return content;
    }

    public double getRating() {
        return rating;
    }

    public Recipe getRecipe() {
        return recipe;
    }

}