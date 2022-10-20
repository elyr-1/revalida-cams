package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Parent;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import static com.tej.JooQDemo.jooq.sample.model.Tables.*;

@Service
public class ParentServiceImpl implements ParentService {

    @Autowired
    private DSLContext dsl;

    @Override
    public List<Parent> getParents() {
        return dsl.selectFrom(PARENT)
                .orderBy(PARENT.PARENT_NO)
                .fetchInto(Parent.class);
    }

    @Override
    public Parent getParentById(Integer parentId) {
        return dsl.selectFrom(PARENT)
                .where(PARENT.PARENT_ID.eq(parentId))
                .fetchOneInto(Parent.class);
    }

    @Override
    public Parent insertParent(Parent parent) {
        dsl.insertInto(PARENT,
                PARENT.PARENT_NO,
                PARENT.PARENT_NAME,
                PARENT.STUDENT_NO,
                PARENT.ID)
        .values(
                parent.getParentNo(),
                parent.getParentName(),
                parent.getStudentNo(),
                parent.getId())
        .execute();
        return parent;
    }

    @Override
    public Parent updateParent(Integer parentId, Parent parent) {
        dsl.update(PARENT)
                .set(PARENT.PARENT_NO, parent.getParentNo())
                .set(PARENT.PARENT_NAME, parent.getParentName())
                .set(PARENT.STUDENT_NO, parent.getStudentNo())
                .set(PARENT.ID, parent.getId())
                .where(PARENT.PARENT_ID.eq(parentId))
                .execute();
        return parent;
    }

    @Override
    public void deleteParentById(Integer parentId) {
        dsl.deleteFrom(PARENT)
                .where(PARENT.PARENT_ID.eq(parentId))
                .execute();
    }

}
