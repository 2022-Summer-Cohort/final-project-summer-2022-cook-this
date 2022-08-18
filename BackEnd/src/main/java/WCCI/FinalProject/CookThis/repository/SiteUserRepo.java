package WCCI.FinalProject.CookThis.repository;

import WCCI.FinalProject.CookThis.model.SiteUser;
import org.springframework.data.repository.CrudRepository;

public interface SiteUserRepo extends CrudRepository<SiteUser, Long> {
    SiteUser findByUserNameIgnoreCase(String userName);
}

