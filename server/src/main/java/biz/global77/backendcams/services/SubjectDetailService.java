package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.SubjectDetailHistory;
import java.util.List;

public interface SubjectDetailService {

    List<SubjectDetailHistory> getSubjectDetails();
    SubjectDetailHistory getSubjectDetailById(Integer sessionId);
    SubjectDetailHistory insertSubjectDetail(SubjectDetailHistory subjectDetail);
    SubjectDetailHistory updateSubjectDetail(Integer sessionId, SubjectDetailHistory subjectDetail);
    void deleteSubjectDetailById(Integer sessionId);

}
