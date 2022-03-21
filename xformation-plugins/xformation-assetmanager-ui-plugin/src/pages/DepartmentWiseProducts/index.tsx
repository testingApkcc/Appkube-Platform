import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { images } from '../../img';
import { PLUGIN_BASE_URL } from '../../constants';
import { SelectCloudFilter } from '../../components/SelectCloudFilter';

export class DepartmentWiseProducts extends React.Component<any, any> {
  breadCrumbs: any;
  constructor(props: any) {
    super(props);
    this.state = {
      showRecentFilter: false,
      showAddNewFilter: false,
      product: [
        {
          title: 'Human Resources',
          isOpen: true,
          productList: [
            {
              title: 'EMS',
              services: [
                {
                  stage: 'Production',
                  mainservices: [
                    {
                      title: 'Business Services',
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    },
                    {
                      title: 'Gateway Services',
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  stage: 'Testing',
                  mainServices: [
                    {
                      title: 'Business Services',
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    },
                    {
                      title: 'Gateway Services',
                      servicesType: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              title: 'Procurement',
              services: [
                {
                  stage: 'Production',
                  mainservices: [
                    {
                      title: 'Business Services',
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    },
                    {
                      title: 'Gateway Services',
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  stage: 'Testing',
                  mainServices: [
                    {
                      title: 'Business Services',
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    },
                    {
                      title: 'Gateway Services',
                      servicesType: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
          ]
        },
        {
          title: 'IT infra',
          isOpen: false,
          productList: [
            {
              title: 'EMS',
              services: [
                {
                  stage: 'Production',
                  mainservices: [
                    {
                      title: 'Business Services',
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    },
                    {
                      title: 'Gateway Services',
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  stage: 'Testing',
                  mainServices: [
                    {
                      title: 'Business Services',
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    },
                    {
                      title: 'Gateway Services',
                      servicesType: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              title: 'Procurement',
              services: [
                {
                  stage: 'Production',
                  mainservices: [
                    {
                      title: 'Business Services',
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    },
                    {
                      title: 'Gateway Services',
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  stage: 'Testing',
                  mainServices: [
                    {
                      title: 'Business Services',
                      services: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    },
                    {
                      title: 'Gateway Services',
                      servicesType: [
                        {
                          title: 'admission',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        },
                        {
                          title: 'Fee',
                          subServices: [
                            {
                              'title': 'App services',
                              list: [
                                {
                                  'title': 'List & Act',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Admission',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                            {
                              'title': 'Data Services',
                              list: [
                                {
                                  'title': 'Postgre SQL',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                },
                                {
                                  'title': 'Elastic Search',
                                  'performance': '70',
                                  'availibility': '50',
                                  'security': '30',
                                  'data protection': 70,
                                  'user exp': 80
                                }
                              ]
                            },
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
          ]
        }
      ]
    };
    this.breadCrumbs = [
      {
        label: 'Home',
        route: `/`,
      },
      {
        label: 'Assets | Environments',
        isCurrentPage: true,
      },
    ];
  }

  displayProductServices = () => {
    const { product } = this.state;
    let retData = [];
    if (product && product.length > 0) {
      for (let i = 0; i < product.length; i++) {
        let row = product[i];
        if (row.productList) {
          let product = [];
          for (let j = 0; j < row.productList.length; j++) {
            product.push(

            );
          }
        }
        retData.push(
          <div className="inner-table">
            <div className="thead">{row.title}</div>
            <div className="tbody">
              <div className="name"><span>EMS</span> <i className='fa fa-chevron-down'></i></div>
              <div className="app-services">10</div>
              <div className="data-services">5</div>
              <div className="ou">Admin, Accounts Adminssion, Transport</div>
              <div className="edit">
                <button className="edit-btn">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
              {row.isOpen == true &&
                <div className='environments'>
                  <div className='environments-inner'>
                    <div className='heading'>
                      <h3>EMS - Environments</h3>
                      <div className='buttons'>
                        <button className='btn'>
                          <i className='fa fa-plus'></i>
                        </button>
                        <button className='btn'>
                          <i className='fa fa-eye'></i>
                        </button>
                        <button className='btn'>
                          <i className='fa fa-bars'></i>
                        </button>
                      </div>
                    </div>
                    <div className='content'>
                      <div className='tabs-container'>
                        <div className='tabs'>
                          <ul>
                            <li className='active'>Production</li>
                            <li>Testing</li>
                            <li>Stage</li>
                            <li>Development</li>
                          </ul>
                        </div>
                        <div className='tabs-content'>
                          <ul>
                            <li>
                              <div className='icon'><img src={images.Icon} alt="" /></div>
                              <div className='heading'>
                                <span>Development</span>
                                <div className='icon'>
                                  <div className='fa-icon'>
                                    <i className='fa fa-chevron-down'></i>
                                  </div>
                                  <div className='edit'>
                                    <div className='bars'>
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className='icon'><img src={images.Icon} alt="" /></div>
                              <div className='heading'>
                                <span>Load Balancer</span>
                                <div className='icon'>
                                  <div className='fa-icon'>
                                    <i className='fa fa-chevron-down'></i>
                                  </div>
                                  <div className='edit'>
                                    <div className='bars'>
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className='icon'><img src={images.Icon} alt="" /></div>
                              <div className='heading'>
                                <span>Gateway Services</span>
                                <div className='icon'>
                                  <div className='fa-icon'>
                                    <i className='fa fa-chevron-down'></i>
                                  </div>
                                  <div className='edit'>
                                    <div className='bars'>
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className='heading full'>
                                <span>Business Services</span>
                                <div className='icon'>
                                  <div className='fa-icon'>
                                    <i className='fa fa-chevron-up'></i>
                                  </div>
                                  <div className='edit'>
                                    <div className='bars'>
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='content-table'>
                                <div className='table'>
                                  <div className='thead'>
                                    <div className='th'>Name</div>
                                  </div>
                                  <div className='tbody'>
                                    <div className='td'>
                                      Admission
                                    </div>
                                    <div className='table performance-table'>
                                      <div className='tbody'>
                                        <div className='td'><strong>App Services</strong></div>
                                        <div className='td'>Performance</div>
                                        <div className='td'>Availability</div>
                                        <div className='td'>Security</div>
                                        <div className='td'>Data Protection</div>
                                        <div className='td'>User exp</div>
                                      </div>
                                      <div className='tbody'>
                                        <div className='td'>List &#38; Act</div>
                                        <div className='td'><div className='progress-circle green'><i className='fa fa-check-circle'></i></div></div>
                                        <div className='td'><div className='progress-circle green'><i className='fa fa-check-circle'></i></div></div>
                                        <div className='td'><div className='progress-circle green'><i className='fa fa-check-circle'></i></div></div>
                                        <div className='td'><div className='progress-circle green'><i className='fa fa-check-circle'></i></div></div>
                                        <div className='td'><div className='progress-circle green'><i className='fa fa-check-circle'></i></div></div>
                                      </div>
                                      <div className='tbody'>
                                        <div className='td'>Admission</div>
                                        <div className='td'><div className='progress-circle green'><i className='fa fa-check-circle'></i></div></div>
                                        <div className='td'><div className='progress-circle orange'><i className='fa fa-check-circle'></i></div></div>
                                        <div className='td'><div className='progress-circle green'><i className='fa fa-check-circle'></i></div></div>
                                        <div className='td'><div className='progress-circle green'><i className='fa fa-check-circle'></i></div></div>
                                        <div className='td'><div className='progress-circle green'><i className='fa fa-check-circle'></i></div></div>
                                      </div>
                                      <div className='tbody'>
                                        <div className='td'><strong>Data Services</strong></div>
                                      </div>
                                      <div className='tbody'>
                                        <div className='td'>Postgre SQL</div>
                                        <div className='td'><div className='progress-circle green'><i className='fa fa-check-circle'></i></div></div>
                                        <div className='td'><div className='progress-circle green'><i className='fa fa-check-circle'></i></div></div>
                                        <div className='td'><div className='progress-circle yellow'><i className='fa fa-check-circle'></i></div></div>
                                        <div className='td'><div className='progress-circle green'><i className='fa fa-check-circle'></i></div></div>
                                        <div className='td'><div className='progress-circle red'><i className='fa fa-check-circle'></i></div></div>
                                      </div>
                                      <div className='tbody'>
                                        <div className='td'>Elastic Search</div>
                                        <div className='td'><div className='progress-circle green'><i className='fa fa-check-circle'></i></div></div>
                                        <div className='td'><div className='progress-circle green'><i className='fa fa-check-circle'></i></div></div>
                                        <div className='td'><div className='progress-circle green'><i className='fa fa-check-circle'></i></div></div>
                                        <div className='td'><div className='progress-circle green'><i className='fa fa-check-circle'></i></div></div>
                                        <div className='td'><div className='progress-circle green'><i className='fa fa-check-circle'></i></div></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
            <div className="tbody">
              <div className="name"><span>Procurement</span> <i className='fa fa-chevron-down'></i></div>
              <div className="app-services">10</div>
              <div className="data-services">5</div>
              <div className="ou">Admin, Accounts Admission, Transport</div>
              <div className="edit">
                <button className="edit-btn">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        );
      }
    }
    return retData;
  }

  render() {
    const { showRecentFilter, showAddNewFilter } = this.state;
    return (
      <div className="asset-container">
        <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="ASSET MANAGEMENT" />
        <div className="department-wise-container">
          <div className="common-container">
            <div className="row">
              <div className="col-lg-9 col-md-9 col-sm-12">
                <div className="asset-heading">Department wise</div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="float-right common-right-btn">
                  <div className="wise-icon">
                    <Link to={`${PLUGIN_BASE_URL}/department-wise-products`}>
                      <img src={images.Jobs} alt="" />
                    </Link>
                  </div>
                  <Link to={`${PLUGIN_BASE_URL}/environments`} className="asset-white-button min-width-inherit">
                    <i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp; Back
                  </Link>
                </div>
              </div>
            </div>
            <div className="department-wise-boxs">
              <div className="department-box">
                <div className="heading">Human Resource</div>
                <div className="contents">
                  <ul>
                    <li>
                      <label>No. of Products</label>
                      <span>150</span>
                    </li>
                    <li>
                      <label>Prod Billing</label>
                      <span>$100</span>
                    </li>
                    <li>
                      <label>Other Billing</label>
                      <span>$275</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="department-box">
                <div className="heading">IT infra</div>
                <div className="contents">
                  <ul>
                    <li>
                      <label>No. of Products</label>
                      <span>150</span>
                    </li>
                    <li>
                      <label>Prod Billing</label>
                      <span>$100</span>
                    </li>
                    <li>
                      <label>Other Billing</label>
                      <span>$275</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="department-box">
                <div className="heading">IT Development</div>
                <div className="contents">
                  <ul>
                    <li>
                      <label>No. of Products</label>
                      <span>150</span>
                    </li>
                    <li>
                      <label>Prod Billing</label>
                      <span>$100</span>
                    </li>
                    <li>
                      <label>Other Billing</label>
                      <span>$275</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="department-box">
                <div className="heading">Finance</div>
                <div className="contents">
                  <ul>
                    <li>
                      <label>No. of Products</label>
                      <span>150</span>
                    </li>
                    <li>
                      <label>Prod Billing</label>
                      <span>$100</span>
                    </li>
                    <li>
                      <label>Other Billing</label>
                      <span>$275</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="department-box">
                <div className="heading">Finance</div>
                <div className="contents">
                  <ul>
                    <li>
                      <label>No. of Products</label>
                      <span>150</span>
                    </li>
                    <li>
                      <label>Prod Billing</label>
                      <span>$100</span>
                    </li>
                    <li>
                      <label>Other Billing</label>
                      <span>$275</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="department-box">
                <div className="heading">Human Resource</div>
                <div className="contents">
                  <ul>
                    <li>
                      <label>No. of Products</label>
                      <span>150</span>
                    </li>
                    <li>
                      <label>Prod Billing</label>
                      <span>$100</span>
                    </li>
                    <li>
                      <label>Other Billing</label>
                      <span>$275</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="common-container department-fliters-container">
            <div className="selects-container">
              <SelectCloudFilter />
            </div>
            <div className="fliter-container">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="fliter">
                        <div
                          className="fliter-toggel"
                          onClick={() =>
                            this.setState({
                              showRecentFilter: !showRecentFilter,
                            })
                          }
                        >
                          <i className="fa fa-clock-o"></i>
                          <span>Recent</span>
                        </div>
                        <div className={showRecentFilter === true ? 'fliter-collapse active' : 'fliter-collapse'}>
                          <ul>
                            <li>
                              <a href="#">
                                <span>
                                  <img src={images.awsLogo} alt="" />
                                </span>
                                <p>AWS (657907747545)</p>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>
                                  <img src={images.awsLogo} alt="" />
                                </span>
                                <p>AWS (655668745458)</p>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="fliter">
                        <div
                          className="fliter-toggel"
                          onClick={() =>
                            this.setState({
                              showAddNewFilter: !showAddNewFilter,
                            })
                          }
                        >
                          <i className="fa fa-plus"></i>
                          <span>Add New Environment</span>
                        </div>
                        <div className={showAddNewFilter === true ? 'fliter-collapse active' : 'fliter-collapse'}>
                          <ul>
                            <li>
                              <a
                                style={{
                                  float: 'left',
                                  marginRight: '-54px',
                                  fontSize: '14px',
                                }}
                              >
                                <i>
                                  <Link to={`${PLUGIN_BASE_URL}/account-setup`}>
                                    <span>
                                      <img src={images.awsLogo} alt="" />
                                    </span>{' '}
                                    AWS Environment
                                  </Link>
                                </i>
                              </a>
                            </li>

                            <li>
                              <a
                                style={{
                                  float: 'left',
                                  marginRight: '-54px',
                                  fontSize: '14px',
                                }}
                              >
                                <i>
                                  <span>
                                    <img src={images.microsoftAzureLogo} alt="" />
                                  </span>{' '}
                                  Azure Environment
                                </i>
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  float: 'left',
                                  marginRight: '-54px',
                                  fontSize: '14px',
                                }}
                              >
                                <i>
                                  <span>
                                    <img src={images.gcpLogo} alt="" />
                                  </span>{' '}
                                  GCP Environment
                                </i>
                              </a>
                            </li>
                            <li>
                              <a style={{ float: 'left', fontSize: '14px' }}>
                                <i>
                                  <span>
                                    <img src={images.KubernetesLogo} alt="" />
                                  </span>{' '}
                                  Kubernetes{' '}
                                </i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="fliter">
                        <div className="fliter-toggel">
                          <i className="fa fa-sign-out"></i>
                          <span>Export</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="form-group search-control m-b-0">
                    <button className="btn btn-search">
                      <i className="fa fa-search"></i>
                    </button>
                    <input type="text" className="input-group-text" placeholder="Search" />
                  </div>
                </div>
              </div>
            </div>
            <div className="data-table">
              <div className="thead">
                <div className="name">Name</div>
                <div className="app-services">App Services</div>
                <div className="data-services">Data Services</div>
                <div className="ou">OU</div>
                <div className="edit">
                  <button className="edit-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
              <div className="tbody">
                {this.displayProductServices()}

                {/* <div className="inner-table">
                  <div className="thead">IT Infra</div>
                  <div className="tbody">
                    <div className="name"><span>Product 1</span> <i className='fa fa-chevron-down'></i></div>
                    <div className="app-services">10</div>
                    <div className="data-services">5</div>
                    <div className="ou">Admin, Accounts Adminssion, Transport</div>
                    <div className="edit">
                      <button className="edit-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                  <div className="tbody">
                    <div className="name"><span>Product 2</span> <i className='fa fa-chevron-down'></i></div>
                    <div className="app-services">10</div>
                    <div className="data-services">5</div>
                    <div className="ou">Admin, Accounts Adminssion, Transport</div>
                    <div className="edit">
                      <button className="edit-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="inner-table">
                  <div className="thead">IT Development</div>
                  <div className="tbody">
                    <div className="name"><span>Product 1</span> <i className='fa fa-chevron-down'></i></div>
                    <div className="app-services">10</div>
                    <div className="data-services">5</div>
                    <div className="ou">Admin, Accounts Adminssion, Transport</div>
                    <div className="edit">
                      <button className="edit-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                  <div className="tbody">
                    <div className="name"><span>Product 2</span> <i className='fa fa-chevron-down'></i></div>
                    <div className="app-services">10</div>
                    <div className="data-services">5</div>
                    <div className="ou">Admin, Accounts Adminssion, Transport</div>
                    <div className="edit">
                      <button className="edit-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="inner-table">
                  <div className="thead">Finance</div>
                  <div className="tbody">
                    <div className="name"><span>Product 1</span> <i className='fa fa-chevron-down'></i></div>
                    <div className="app-services">10</div>
                    <div className="data-services">5</div>
                    <div className="ou">Admin, Accounts Adminssion, Transport</div>
                    <div className="edit">
                      <button className="edit-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                  <div className="tbody">
                    <div className="name"><span>Product 2</span> <i className='fa fa-chevron-down'></i></div>
                    <div className="app-services">10</div>
                    <div className="data-services">5</div>
                    <div className="ou">Admin, Accounts Adminssion, Transport</div>
                    <div className="edit">
                      <button className="edit-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
