package WCCI.FinalProject.CookThis.model;

import javax.persistence.Embeddable;
import javax.persistence.Lob;

@Embeddable
public class Step {
    @Lob
private String instructions;

    public Step(String instructions) {
        this.instructions = instructions;
    }

    public String getInstructions() {
        return instructions;
    }

    public Step() {
    }
}

