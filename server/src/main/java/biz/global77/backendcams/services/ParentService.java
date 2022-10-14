package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Parent;

import java.util.List;

public interface ParentService {

    List<Parent> getParents();
    Parent getParentById(Integer parentId);
    Parent insertParent(Parent parent);
    Parent updateParent(Integer parentId, Parent parent);
    void deleteParentById(Integer parentId);

}
