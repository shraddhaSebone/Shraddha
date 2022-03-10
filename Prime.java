package hello;
import java.util.*;
public class Prime {

	public static void main(String[] args) {
			 Scanner sc=new Scanner(System.in);
			 System.out.println("enter a number");
			 int n=sc.nextInt();
			 int i,j,flag;
			 for(i=0;i<=n;i++) {
				 if (i==1||i==0) {
					 continue;
				 }
				 flag=1;
				 for(j=2;j<=i/2;j++) {
					 if(i%j==0) {
						 flag=0;
						 break;
					 }
				 }
				 if(flag==1) {
					 System.out.println(i);
				 }

			 }
			
			}
}
