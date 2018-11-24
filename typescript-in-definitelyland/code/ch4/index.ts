declare namespace angular.resource1 {
  interface ResourceProvider {
    create<T extends Resource<any>>(): T;
  }

  interface Resource<T> {
    $insert(): T;
  }
  let $resource: ResourceProvider
}

namespace sample1 {
  interface Sample {
    str: string;
  }

  interface SampleResource extends Sample, angular.resource1.Resource<Sample> { }

  let $obj = angular.resource1.$resource.create<SampleResource>()
  $obj.str = 'test'
  let obj = $obj.$insert()
  console.log(obj.str)
}


declare namespace angular.resource2 {
  interface ResourcePProvider {
    create<T>(): T & Resource<T>
  }

  interface Resource<T> {
    $insert(): T;
  }
  let $resource: ResourcePProvider
}

namespace sample2 {
  interface Sample {
    str: string;
  }

  let $obj = angular.resource2.$resource.create<Sample>()
  $obj.str = 'test'
  let obj = $obj.$insert()
  console.log(obj.str)
}

export { sample1, sample2 }
