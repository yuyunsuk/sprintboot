package com.dw.lms.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller // View 를 Controll
public class ViewController { // 디자인 패턴, MVC(Model[정보] View(=>Front 로 넘어감) Controll[로직(Controll+Service)]) 디자인 패턴
    @GetMapping("/lms/login.html")
    public String login() {
        return "login";
    } // login.html (.html 생략)

    @GetMapping("/lms/main.html")
    public String main(){return "main";}

    @GetMapping("/lms/lecture.html")
    public String lecture(){return "lecture";}

    @GetMapping("/lms/lectureDetail.html")
    public String lectureDetail(){return "lectureDetail";}

    @GetMapping("/lms/lms_notices.html")
    public String lms_notices(){return "lms_notices";}

    @GetMapping("/lms/lms_qa.html")
    public String lms_qa(){return "lms_qa";}

    @GetMapping("/lms/lms_events.html")
    public String lms_events(){return "lms_events";}

    @GetMapping("/lms/mypage.html")
    public String mypage() {
        return "mypage";
    }

    @GetMapping("/lms/mypageEdu.html")
    public String mypageEdu() {
        return "mypageEdu";
    }

    @GetMapping("/lms/mypageDelete.html")
    public String mypageDelete() {
        return "mypageDelete";
    }

    @GetMapping("/lms/sub_navBox.html")
    public String sub_navBox() {
        return "sub_navBox";
    }

    @GetMapping("/lms/cart.html")
    public String cart() {
        return "cart";
    }

    @GetMapping("/lms/reviewDetail.html")
    public String reviewDetail(){
    		return "reviewDetail";
		}

    @GetMapping("/lms/header.html")
    public String header() {
        return "header";
    }

    @GetMapping("/lms/header_admin.html")
    public String header_admin() {
        return "header_admin";
    }

    @GetMapping("/lms/footer.html")
    public String footer() {
        return "footer";
    }

    @GetMapping("/lms/mypageLecture.html")
    public String mypageLecture() {
    	  return "mypageLecture";
    }

    @GetMapping("/lms/mypageUserDelete.html")
    public String mypageUserDelete() {
    	  return "mypageUserDelete";
    }



}
