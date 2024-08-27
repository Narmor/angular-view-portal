import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ComponentFactoryResolver, Injector, ApplicationRef, HostListener,
} from '@angular/core';
import {CdkPortal, DomPortalOutlet, PortalOutlet} from '@angular/cdk/portal';

@Component({
  selector: 'app-sidebar-header-portal',
  templateUrl: './sidebar-header-portal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarHeaderPortalComponent implements AfterViewInit, OnDestroy {
  @ViewChild(CdkPortal, {static: true}) portal: any;
  private portalHost!: PortalOutlet;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {
  }

  ngAfterViewInit(): void {
    console.log(document.querySelector('#sidebar-header-container'));
    this.portalHost = new DomPortalOutlet(
      // tslint:disable-next-line:no-non-null-assertion
      document.querySelector('#sidebar-header-container')!,
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );
    this.portalHost.attach(this.portal);
  }

  ngOnDestroy(): void {
    this.portalHost.detach();
  }
}
