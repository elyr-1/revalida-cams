package biz.global77.backendcams.interfaces;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Subject;
import java.util.List;

public interface SubjectInterface {

    List<Subject> getSubjects();
    Subject getSubjectById(Integer subjectId);
    Subject insertSubject(Subject subject);
    Subject updateSubject(Integer subjectId, Subject subject);
    void deleteSubjectById(Integer subjectId);

}
