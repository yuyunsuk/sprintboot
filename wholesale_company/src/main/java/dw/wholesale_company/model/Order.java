package dw.wholesale_company.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter

@Entity
@Table(name = "주문")
public class Order {
    @Id
    @Column(name = "주문번호", length=5)
    private String orderId;

    @ManyToOne
    @JoinColumn(name = "고객번호")
    private Customer customer; // 관계를 맺는 엔티티가 앞에 와야함(Customer)

    @ManyToOne
    @JoinColumn(name = "사원번호")
    private Employee employee; // 관계를 맺는 엔티티가 앞에 와야함(Employee)

    @Column(name = "주문일")
    private LocalDate orderDate;

    @Column(name = "요청일")
    private LocalDate requestDate;

    @Column(name = "발송일")
    private LocalDate shippingDate;
}
