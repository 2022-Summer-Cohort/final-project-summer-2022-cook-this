package WCCI.FinalProject.CookThis.model;

import javax.persistence.*;

@Embeddable
public class Review {

    private String author;
    @Lob
    private String content;
    private Double rating;

    public Review(String author, String content, Double rating) {
        this.author = author;
        this.content = content;
        this.rating = rating;
    }
    public Review() {
    }

    public String getAuthor() {
        return author;
    }
    public String getContent() {
        return content;
    }
    public Double getRating() {
        return rating;
    }

    public void setRating(Double newRating) {
        this.rating = newRating;
    }
}
